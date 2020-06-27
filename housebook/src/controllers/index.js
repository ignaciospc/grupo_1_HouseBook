const path = require('path')
const models = require(path.join(__dirname, '..', 'models' , 'book'))
const {validationResult} = require('express-validator')

const error = require(path.join(__dirname, '..', 'models', 'validation'))


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

        //console.log(req.body.precio.isNumeric())
        let infoLibro = {
            titulo:req.body.titulo,
            autor:req.body.autores,
            valoracion:req.body.valoracion,
            descripcion:req.body.descripcion,
            categoria:req.body.categoria,
            detalle:req.body.detalle,
            precio:req.body.precio,
            descuento:req.body.descuento,
            //ver checkbox de fisico-pdf-envio
        }

        if(!validationResult(req).isEmpty())     
        {
                
            let errores = error.createBook(validationResult(req))
            
            
            res.render('housebook/productAdd', {errores, infoLibro})
        }
        
        else {
        infoLibro.portada = req.files[0].filename,
        models.create(infoLibro)
        res.redirect("/products")
            
        }
    },
    editForm: (req,res) => {
        let product = models.findOne(req.params.id)
        if (!product) {res.send("producto no encontrado ameo"); return} //ACTIVA POR SI NO ENCUENTRA EL ID
        res.render("housebook/productEdit", {product})
    },
    edit: (req,res, next) => {
        console.log(req.file)

       /* let portada = ""
        if (req.file) {
            //le saco la palabra public para que sea a partir de /img/...
            portada = req.file.path.replace('public/', '/');
        }*/

        let infoLibro = {
            id:req.params.id,
            titulo:req.body.titulo,
            autor:req.body.autores,
            valoracion:req.body.valoracion,
            descripcion:req.body.descripcion,
            categoria:req.body.categoria,
            detalle:req.body.detalle,
            precio:req.body.precio,
            descuento:req.body.descuento,
            portada: req.files[0].filename,
            //ver checkbox de fisico-pdf-envio
        }
       
        if(!validationResult(req).isEmpty()){

            let errores = error.create(validationResult(req))

            res.render("housebook/productEdit", {product : infoLibro, errores})
        }
        else{
       // console.log(infoLibro)
        models.actualizar(infoLibro)
        res.redirect("/")
        }
    },
    delete: (req, res, next) => {

        let product = models.findOne(req.params.id)
        models.delete(product);
        

        res.redirect("/products")
    }
}