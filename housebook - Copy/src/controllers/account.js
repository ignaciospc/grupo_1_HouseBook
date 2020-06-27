const modelUsers = require("../models/users")
const bcrypt = require("bcrypt");
const path = require('path')
const {check, validationResult, body} = require("express-validator");

const error = path.join("..","middlewares", "validation.js")

module.exports = {
    
    registerForm: (req, res) => {
        res.render("housebook/register-opcion")
    },

    register : (req, res) => {

        let sal = 10;
        let validation = validationResult(req)       
        
        console.log(validation.mapped());
        
        if(!validation.isEmpty()){

           res.render("housebook/register-opcion", { errors : validation.mapped()});

        }       

        let user = {
            usuario : req.body.usuario,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, sal ),
        }

        if(!validationResult(req).isEmpty()){
            let errores = error.registerUser(validationResult(req))

            res.send(errores) //Mandar e imprimir errores
        }

        //usuario en db 
        let usuario = modelUsers.createUsers(user); //comprobar que sea unico el email.

        //lo logueo
        req.session.isLogged = true;
        req.session.idUser = usuario.id;
        req.session.emailUser = usuario.email;

        console.log(res.locals.isLogged)

        res.redirect("/")
    },

    loginForm: (req, res) => {

        res.render ("housebook/login-opcion")

    },

    login: (req, res) => {

        let usuario = modelUsers.findOne(req.body.usuario)
        
        if(usuario == undefined){
        let errorUser = "usuario no encontrado"; 
        res.send (errorUser)} //TO DO
        
        let validacion =  bcrypt.compareSync(req.body.password, usuario.password); //true or false

        //borro passwrord para que no se almacen variables con contenido delicado
        delete usuario.password;
        delete req.body.password;

        if (!validacion) { 
        let errorPsw = "contraseña incorrecta";
        res.send(errorPsw)} //TO DO
       
        
        //lo logueo
        
        req.session.isLogged = true;
        req.session.idUser = usuario.id;
        req.session.user = usuario.usuario;
        req.session.emailUser = usuario.email;
        
        console.log(res.locals.isLogged)


        if(req.body.remeber == 'on') 
        //deberia poner en el primer string el ID y el resto el hash del email == cookie : 5XXXX;  donde 5 es el id y xxxx email haseado para validarlo.
        {res.cookies('recordame', req.body.email, {expires: new Date(Date.now() + 1000*60*60)})} //60 min
        res.redirect("/")
        

    }

}