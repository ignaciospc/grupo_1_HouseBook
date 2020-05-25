const path = require('path')
const models = require(path.join(__dirname, "../models/book.js"))

module.exports ={
    home: (req, res) => {
        let product = models.findAll()
        console.log(product[0])
        res.render('housebook/index', {product})
    }


}