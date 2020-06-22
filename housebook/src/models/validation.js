const {validation} = require('express-validator')

module.exports= {
    createBook : (validation) => {
        
        let errores = {
            titulo : [],
            autor : [],
            valoracion : [],
            categoria : [],
            precio : [],
            descuento : []
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
                default : console.log(validacion); res.send('ERROR EN LA LISTA DE ERRORES. DUH'); break;
            }
        }     
        
        return errores;
    },

    register: (validacion) => {
        let errores = {
            
        }

    },
}