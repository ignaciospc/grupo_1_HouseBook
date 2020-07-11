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
    create:(req,res) =>{

        res.render("housebook/productAdd")

    },
    createBook : (req, res, next) => {
        let portada = "";
        console.log(req.body)
        if (req.file) {
            //le saco la palabra public para que sea a partir de /img/...
            portada = req.file.path.replace('public/', '/');
        }

        let infoLibro = {
            titulo:req.body.titulo,
            autor:req.body.autores,
            valoracion:req.body.valoracion,
            descripcion:req.body.descripcion,
            categoria:req.body.categoria,
            detalle:req.body.detalle,
            precio:req.body.precio,
            descuento:req.body.descuento,
            portada: req.body.portada
            //ver checkbox de fisico-pdf-envio
        }

        models.create(infoLibro)

        

        res.redirect("/")

    },

    editForm: (req,res) => {
        let product = models.findOne(req.params.id)
        if (!product) {res.send("producto no encontrado ameo"); return} //ACTIVA POR SI NO ENCUENTRA EL ID
        res.render("housebook/productEdit", {product})
    },
    edit: (req,res, next) => {
        console.log(req.body)

        let portada = ""
        if (req.file) {
            //le saco la palabra public para que sea a partir de /img/...
            portada = req.file.path.replace('public/', '/');
        }

        let infoLibro = {
            titulo:req.body.titulo,
            autor:req.body.autores,
            valoracion:req.body.valoracion,
            descripcion:req.body.descripcion,
            categoria:req.body.categoria,
            detalle:req.body.detalle,
            precio:req.body.precio,
            descuento:req.body.descuento,
            portada: portada
            //ver checkbox de fisico-pdf-envio
        }
       // console.log(infoLibro)
        models.actualizar(infoLibro)
        res.redirect("/")
    },
    delete: (req, res, next) => {
        let product = models.findOne(req.params.id)
        res.send(product)
    }

}