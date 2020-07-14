const path = require('path')
const models = require(path.join(__dirname, '..', 'models' , 'book'))
//const {validationResult} = require('express-validator')

//const error = require(path.join(__dirname, '..', 'models', 'validation'))

module.exports ={
    home: (req, res) => {
        let product = models.findAll()
        res.render('housebook/index', {product})
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