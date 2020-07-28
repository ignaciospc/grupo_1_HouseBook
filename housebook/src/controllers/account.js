const bcrypt = require("bcrypt");
const path = require('path')
//const modelUsers = require(path.join(__dirname, "..", "models", "users"))
const db = require(path.join(__dirname, "..", 'database', 'models'))
const {validationResult} = require("express-validator");

const error = path.join("..","middlewares", "validation.js")

let account = {
    
    registerForm: (req, res) => {
        res.render("user/register-opcion")
    },

    register : async (req, res) => {

        let sal = 10;
        let validation = validationResult(req)       
        
        //console.log(validation.mapped());
        
        if(!validation.isEmpty()){

           res.render("user/register-opcion", { errors : validation.mapped()});
            return false;
        }       

        let user = {
            nombre: req.body.nombre,
            user : req.body.usuario,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, sal ),
        }

        //valido unico mail
        let dbUsuario = await db.usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        if(!dbUsuario){
            let errors = {
                email : "email ya tomado"
            }
            res.render("user/register-opcion", {errors})
        }
        //lo creo
        db.usuario.create(user);
        delete user.password;
        //lo logueo
        req.session.isLogged = true;
        req.session.iduser = dbUsuario.id;
        req.session.user = dbUsuario.usuario;
        req.session.email = dbUsuario.email;
        
        res.redirect("/")
    },

    loginForm: (req, res) => {

        res.render ("user/login-opcion")

    },

    login: async (req, res) => {

        let usuario = await db.usuario.findOne({
            where: {
                email : req.body.usuario
            }
        })

        if(usuario == null){
        let errorUser = "usuario no encontrado"; 
        res.render ("user/login-opcion" , {errorUser})
        return false;
        }
        
        let validacion =  bcrypt.compareSync(req.body.password, usuario.password); //true or false

        //borro passwrord para que no se almacen variables con contenido delicado
        delete usuario.password;
        delete req.body.password;

        if (!validacion) { 
        let errorPsw = "contraseña incorrecta";
        res.render ("user/login-opcion" , {errorPsw})
        return false;
        }
       
        
        //lo logueo
        
        req.session.isLogged = true;
        req.session.iduser = usuario.id;
        req.session.user = usuario.user;
        req.session.email = usuario.email;
        req.session.admin = usuario.admin ? usuario.admin : null;
        
        if(req.body.remember) 
        {
            let emailHash = bcrypt.hashSync(usuario.email, 4)
            res.cookie('rId', usuario.id, {expires: new Date(Date.now() + 1000*60*60*3)}) //sumo el id a una cookie :´/
            res.cookie('rEm', emailHash, {expires: new Date(Date.now() + 1000*60*60*3)}) //sumo el email hasheado a una cookie  :/
        } //3 dias
        /* debug
        console.log("controlador account", req.session)
        */
        res.redirect("/")
        

    },
    profileUser : async (req, res) => {
        //verifico que el parametro id sea igual a la sesion existente. Si no la borro (soluciona bug de poner otro id en URI estando logueado)
        // en middleware Session verifico que la cookie y el req.session sean reales.
            let usuario = await db.usuario.findOne({
                where :{
                    email: req.session.email
                }
            })
            delete usuario.password;
            res.render("user/profile",{usuario})

    },

    logout : (req, res) => {
        req.session.destroy();
        res.cookie('rEm', null, {maxAge: -1}) //rEm --> RECORDAR EMAIL
        res.cookie('rId', null, {maxAge: -1}); // rID --> RECORDAR ID
        res.redirect("/")
    },

}

module.exports = account;