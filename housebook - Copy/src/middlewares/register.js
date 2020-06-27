const {check} = require('express-validator')

module.exports = [
    check('usuario')    
    .isLength({min: 2}).withMessage('minimo 2 caracteres')
    .isLength({max: 20}).withMessage('maximo 20')

    ,check('email')
    .not().isEmpty().withMessage('este campo no debe estar vacio')
    .isEmail().withMessage('este campo debe ser un email')

    ,check('password')    
    .isLength({min: 5}).withMessage('minimo 5 caracteres en éste campo')
    .custom( (value , {req}) => { 
        if(value !== req.body.re-password) {
            throw new Error ('Las contraseñas deben coincidir')
        }
        return true;
    })

]

