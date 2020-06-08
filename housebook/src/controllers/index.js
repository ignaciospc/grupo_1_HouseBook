const path = require('path')
const models = require(path.join(__dirname, "../models/book.js"))

module.exports ={
    home: (req, res) => {
        let product = models.findAll()        
        res.render('housebook/index', {product})
    },
    products: (req, res) => {
        let product = models.findAll()
        res.render("housebook/products", {product})
    },
    details: (req, res) => {
        
        let product = models.findOne(req.params.id)
        if (!product) {res.send("producto no encontrado ameo"); return} //ACTIVA POR SI NO ENCUENTRA EL ID
        res.render("housebook/productDetail", {product})
    },
    cart : (req, res) => {

        res.render("housebook/productCart")
    },
    create : (req, res) => {

        let infoLibro = {
            titulo:req.body.titulo,
            autor:req.body.autores,
            valoracion:req.body.valoracion,
            descripcion:req.body.descripcion,
            tags:req.body.tags,
            detalle:req.body.detalle-libro,
            //portada:req.file[0].filename
            //ver checkbox de fisico-pdf-envio
        }

        

        res.redirect("housebook/productAdd")

    },

}