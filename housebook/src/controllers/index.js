const path = require('path')
const db = require(path.join(__dirname, "..", 'database', 'models'))

//const models = require(path.join(__dirname, '..', 'models' , 'book'))
//const {validationResult} = require('express-validator')
//const error = require(path.join(__dirname, '..', 'models', 'validation'))

module.exports ={
    home: async (req, res) => {
        /* debug
        console.log("controlador home", req.session)
        */
       let dbProduct;
        try{
        dbProduct = await db.libro.findAll({
            include: [
                {association: 'categorias'  },
                {association: 'idioma'      },
                {association: 'autores'     },
                {association: 'detalle',
                 include: [
                    {association: 'formato'},
                    {association: 'idiomas'}
                ]},
            ]
        })
        } catch(error){
            res.send('error en la base de datos', error)
            console.log(error);
            return false
        }
        //let product = models.findAll()
        res.render('housebook/index', {product : dbProduct})
    },
    cart : (req, res) => {

        res.render("housebook/productCart")
    },
    termininos : (req,res) => {
        res.render("housebook/terminos")
    },
    contact: (req, res) => {
        res.render("housebook/contact");
    }
    
    
}