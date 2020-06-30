const {validation} = require('express-validator')

module.exports= {
    createBook : (validation) => {
        
        let errores = {
            titulo : [],
            autor : [],
            valoracion : [],
            categoria : [],
            precio : [],
            descuento : [],
            portada: []
        }
        let validacion = validation.errors
        
        for (let error of validacion){
            switch(error.param){
                case ('titulo') :      errores.titulo.push(error.msg); break;
                case ('autor') :       errores.autor.push(error.msg); break;
                case ('valoracion') :  errores.valoracion.push(error.msg); break;
                case ('categoria') :   errores.categoria.push(error.msg); break;
                case ('precio') :      errores.precio.push(error.msg); break;
                case ('descuento') :   errores.descuento.push(error.msg); break;
                case ('portada') :     errores.portada.push(error.msg); break;
                default : console.log(validacion); res.send('ERROR EN LA LISTA DE ERRORES. DUH'); break;
            }
        }     


        return errores;
    },

   /* registerUser: (validation) => {
        let errores = {
            usuario : [],
            email : [],
            password : [],
        }

        for (let error of validation.errors){
            switch (error.param){
                case ('usuario') : errores.usuario.push(error.msg); break;
                case ('email') : errores.email.push(error.msg); break;
                case ('password') : errores.password.push(error.msg); break;
                default : console.log(validation); res.send('error en la lista de errores.'); break;
            }
        }
        return errores;
    },*/
}