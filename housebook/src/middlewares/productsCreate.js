const {body,check} = require('express-validator')
module.exports = 
    
[
    check('titulo')
    .not().isEmpty().withMessage('El campo no debe estar vacio')
    .isLength({min:2}).withMessage("El titulo debe poseer al menos 2 letras")
    .escape()//replaces <, >, &, ', " and / with their corresponding HTML entities
    
    ,check('valoracion')
    .not().isEmpty().withMessage('este campo no debe estar vacio')
    .isNumeric().withMessage('el campo debe ser un numero')

    ,body('valoracion').custom(value => {
    if(value > 5 ^ value < 0){
      throw new Error('El valor debe ser mayor a 0 y menor a 5')
    }
    return true;
    })

    ,body('categoria').custom(value => {
      if(value.length === 0) {throw new Error('El campo no debe estar vacio')}
      return true
    })

    ,check('precio')
    .not().isEmpty().withMessage("no tiene que estar vacio")
    .isNumeric().withMessage("el campo debe ser un numero")    
    .isLength({max: 7}).withMessage("el precio debe ser menor a 10 millones")
    .isLength({min: 0}).withMessage('el precio no debe ser negativo')
    
    ,check('descuento')
    .not().isEmpty().withMessage('el campo no debe estar vacio')
    .isNumeric().withMessage('el campo debe ser un numero unicamente')    
    .isLength({min: 0, max: 100}).withMessage('el descuento debe estar entre 0 y 100')

    ]



