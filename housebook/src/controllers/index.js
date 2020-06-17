const path = require('path')
const models = require(path.join(__dirname, "../models/book.js"))
const {validationResult} = require('express-validator')

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
        /*let portada = "";
        console.log(req.body)
        if (req.file) {
            //le saco la palabra public para que sea a partir de /img/...
            portada = req.file.path.replace('public/', '/');
        }*/

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
            portada: req.files[0].filename,
            //ver checkbox de fisico-pdf-envio
        }

        const validation = validationResult(req)       
         

        if(!validation.isEmpty()) 
        {
            let errores = {
                titulo : [],
                autor : [],
                valoracion : [],
                categoria : [],
                precio : [],
                descuento : []
            }
            let validacion = validation.errors
            
            for (let error of validacion){
                switch(error.param){
                    case ('titulo') :      errores.titulo.push(error.msg); break;
                    case ('autor') :       errores.autor.push(error.msg); break;
                    case ('valoracion') :  errores.valoracion.push(error.msg); break;
                    case ('categoria') :   errores.categoria.push(error.msg); break;
                    case ('precio') :      errores.precio.push(error.msg); break;
                    case ('descuento') :   errores.descuento.push(error.msg); break;
                    default : console.log(validacion); res.send('ERROR EN LA LISTA DE ERRORES. DUH'); break;
                }
            }            
            console.log(errores);
            console.log(infoLibro);
            
            
            res.render('housebook/productAdd', {errores, infoLibro})
        }
        
        else {
        
        models.create(infoLibro)
        }},

    editForm: (req,res) => {
        let product = models.findOne(req.params.id)
        if (!product) {res.send("producto no encontrado ameo"); return} //ACTIVA POR SI NO ENCUENTRA EL ID
        res.render("housebook/productEdit", {product})
    },
    edit: (req,res, next) => {
        

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
       // console.log(infoLibro)
        models.actualizar(infoLibro)
        res.redirect("/")
    },
    delete: (req, res, next) => {

        let product = models.findOne(req.params.id)
        models.delete(product);
        

        res.redirect("/products")
    }

}