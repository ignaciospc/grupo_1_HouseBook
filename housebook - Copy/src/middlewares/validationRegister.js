const {check, body} = require('express-validator');

module.exports = [
    check("usuario").notEmpty().withMessage("este campo es obligatorio").bail(),
    check("usuario").isLength({min: 2}).withMessage('debe tener como minimo 2 caracteres'),

    check('email').notEmpty().withMessage('este campo es obligatorio').bail(),
    check("email").isEmail().withMessage('este campo debe ser un email'),

    check("password").notEmpty().withMessage("este campo es obligatorio").bail(),
    body('password').isLength({min: 5}).withMessage('la contraseña debe tener al menos  5 caracteres')
    .custom( (value , {req}) => { 
       
        if(value !== req.body.c_password) {
            throw new Error ('Las contraseñas deben coincidir')
        }
        return true;
    })

]

