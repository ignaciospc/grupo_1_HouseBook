const modelUsers = require("../models/users")
const bcrypt = require("bcrypt");
const {validationResult} = require('express-validator')
const path = require('path')
const error = require(path.join(__dirname , '..' , 'models', 'validation.js'))

module.exports = {
    
    loginForm: (req, res) => {
        res.render("housebook/register")
    },

    register : (req, res) => {

        let user = {
            usuario : req.body.usuario,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
        }

        if(!validationResult(req).isEmpty()){
            let errores = error.registerUser(validationResult(req))

            res.send(errores) //Mandar e imprimir errores
        }

        modelUsers.createUsers(user);

        res.redirect("/")
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