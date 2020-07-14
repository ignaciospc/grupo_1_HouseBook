const bcrypt = require("bcrypt");
const path = require('path')
const modelUsers = require(path.join(__dirname, "..", "models", "users"))
const {validationResult} = require("express-validator");

const error = path.join("..","middlewares", "validation.js")

let account = {
    
    registerForm: (req, res) => {
        res.render("user/register-opcion")
    },

    register : (req, res) => {

        let sal = 10;
        let validation = validationResult(req)       
        
        //console.log(validation.mapped());
        
        if(!validation.isEmpty()){

           res.render("user/register-opcion", { errors : validation.mapped()});

        }       

        let user = {
            nombre: req.body.nombre,
            usuario : req.body.usuario,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, sal ),
        }

        //usuario en db 
        let usuario = modelUsers.createUsers(user); //comprobar que sea unico el email.

        //lo logueo
        req.session.isLogged = true;
        req.session.iduser = usuario.id;
        req.session.user = usuario.usuario;
        req.session.email = usuario.email;
        
        res.redirect("/")
    },

    loginForm: (req, res) => {

        res.render ("user/login-opcion")

    },

    login: (req, res) => {

        let usuario = modelUsers.findOne(req.body.usuario)
        
        if(usuario == undefined){
        let errorUser = "usuario no encontrado"; 
        res.render ("user/login-opcion" , {errorUser})
        }
        
        let validacion =  bcrypt.compareSync(req.body.password, usuario.password); //true or false

        //borro passwrord para que no se almacen variables con contenido delicado
        delete usuario.password;
        delete req.body.password;

        if (!validacion) { 
        let errorPsw = "contraseña incorrecta";
        res.render ("user/login-opcion" , {errorPsw})
        }
       
        
        //lo logueo
        
        req.session.isLogged = true;
        req.session.iduser = usuario.id;
        req.session.user = usuario.usuario;
        req.session.email = usuario.email;

        
        if(req.body.remember) 
        //deberia poner en el primer string el ID y el resto el hash del email == cookie : 5XXXX;  donde 5 es el id y xxxx email haseado para validarlo.
        {
            let emailHash = bcrypt.hashSync(usuario.email, 4)
            res.cookie('rId', usuario.id, {expires: new Date(Date.now() + 1000*60*60*3)}) //sumo el id a una cookie :´/
            res.cookie('rEm', emailHash, {expires: new Date(Date.now() + 1000*60*60*3)}) //sumo el email hasheado a una cookie  :/
        } //3 dias
        res.redirect("/")
        

    },
    profileUser : (req, res) => {
        //verifico que el parametro id sea igual a la sesion existente. Si no la borro (soluciona bug de poner otro id en URI estando logueado)
        // en middleware Session verifico que la cookie y el req.session sean reales.

        if(req.params.id != req.session.iduser){ 
            account.logout(req, res);
        }
        else{
            let usuario = modelUsers.findId(req.params.id)
            delete usuario.password;
            res.render("user/profile",{usuario})
        }
    },

    logout : (req, res) => {
        req.session.destroy();
        res.cookie('rEm', null, {maxAge: -1}) //rEm --> RECORDAR EMAIL
        res.cookie('rId', null, {maxAge: -1}); // rID --> RECORDAR ID
        res.redirect("/")
    },

}

module.exports = account;