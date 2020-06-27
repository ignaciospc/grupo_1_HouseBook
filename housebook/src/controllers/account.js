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

           return res.render("housebook/register-opcion",{ errors : validation.mapped()});

        }       

        let user = {
            usuario : req.body.usuario,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, sal ),
        }

        modelUsers.createUsers(user);

        res.redirect("/")
    },

    loginForm: (req, res) => {

        res.render ("housebook/login-opcion")

    },

    login: (req, res) => {
        let error = {
            usuario: [],
            password: [],
        };
        let usuario = modelUsers.findOne(req.body.email)
        if(usuario.length == 0){error.usuario = "usuario no encontrado"; 
        res.send (error)}
        let validacion =  bcrypt.compareSync(req.body.password, usuario.password); //true or false
        if (!validacion) { error.password = "contraseña incorrecta";
        res.send(error)}
       

    }

}