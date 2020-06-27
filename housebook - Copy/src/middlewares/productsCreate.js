const {body,check} = require('express-validator');
const path = require('path');
module.exports = 
    
[
    check('titulo')
    .not().isEmpty().withMessage('El campo no debe estar vacio')
    .isLength({min:2}).withMessage("El titulo debe poseer al menos 2 letras")
    .isLength({max: 400}).withMessage("Maximo 400 caracteres")
    //.escape()//replaces <, >, &, ', " and / with their corresponding HTML entities
    
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

    ,check('descripcion')

    ,check('detalle')


    ,check('precio')
    .not().isEmpty().withMessage("no tiene que estar vacio")
    .isNumeric().withMessage("el campo debe ser un numero")    
    .isLength({max: 7}).withMessage("el precio debe ser menor a 99 millones")
    .isLength({min: 0}).withMessage('el precio no debe ser negativo')
    
    ,check('descuento')
    .not().isEmpty().withMessage('el campo no debe estar vacio')
    .isNumeric().withMessage('el campo debe ser un numero unicamente')    
    .isLength({min: 0, max: 2}).withMessage('el descuento debe estar entre 0 y 99')

    ,body('portada').custom((value, {req} )=> {
      if(req.file !== undefined){
        const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
        const ext = path.extname(req.file.originalname)
        return acceptedExtensions.includes(ext);
      }

      if(req.files.length == 0) //al NO subir imagen. No pasa por multer ergo req.files tiene un ARRAY vacio. al subir CUALQUIER COSA pasa por multer ergo, req.files contiene algo.
      {
        throw new Error ('La imagen es obligatoria')
      }

      return true
    }).withMessage('La imagen debe tener los siguientes formatos: JPG, JPEG, PNG')

    ]



