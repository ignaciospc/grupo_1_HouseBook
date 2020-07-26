const path = require('path')
const models = require(path.join(__dirname, '..', 'models' , 'book'))
const {validationResult} = require('express-validator')
const db = require(path.join(__dirname, "..", 'database', 'models'))
const error = require(path.join(__dirname, '..', 'models', 'validation'))

module.exports ={
   
    products: async(req, res) => {
        let product = models.findAll()
        let dbProduct;
        try{
        dbProduct = await db.libro.findAll({
            include: [
                {association: 'categorias'  },
                {association: 'idioma'      },
                {association: 'autores'     },
                {association: 'detalle',
                 include: [
                     {association: 'formato'}
                ]},
            ]
        })
    }
    catch(error){
        res.send(error)
        console.log(error);
        return false;
    }
        res.send(dbProduct);
        return;
        let products = {
            id: 6,
            titulo: 'algo',
            autor: 'algo',
            valoracion: 5,
            descripcion: 'algo',
            categoria: 'algo',
            detalle: 'algo',
            precio: 5000,
            descuento: 5,
            portada: 'algo',
            idioma: 'Spanish'
        }
        res.render("products/products", {libro : dbProduct})
    },
    details: (req, res) => {
        
        let product = models.findOne(req.params.id)
        if (!product) {res.send("producto no encontrado ameo"); return} //ACTIVA POR SI NO ENCUENTRA EL ID
        res.render("products/productDetail", {product})
    },
    create:(req,res) =>{

        res.render("products/productAdd")

    },
    createBook : (req, res, next) => {
     
        let portada = "";
        //console.log(req.files)
        //12 cada 5 min
    
        let infoLibro = {
            /*Libro*/
            titulo:req.body.titulo,
            autor:req.body.autores,
            valoracion:req.body.valoracion,
            descripcion:req.body.descripcion,
            categoria:req.body.categoria,
            detalle:req.body.detalle,
            precio:req.body.precio,
            descuento:req.body.descuento,
            /*detalle Libro*/
            dimenciones:req.body.dimensiones,
            formato:req.body.formato,
            idioma:req.body.idioma,
            fechaPublicacion:req.body.publicacion,
            editorial:req.body.editorial,
            ISBN:req.body.isbn,
        }

        if(!validationResult(req).isEmpty())     
        {
                
            let errores = error.createBook(validationResult(req))
            
            //falta imprimir errores de precio, descuento, portada
            //console.log(errores)
            res.render('products/productAdd', {errores, infoLibro})
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
        res.render("products/productEdit", {product})
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
           
            //ver checkbox de fisico-pdf-envio
        }
       
        if(!validationResult(req).isEmpty()){

            let errores = error.createBook(validationResult(req))

            res.render("products/productEdit", {product : infoLibro, errores})
        }
        else{
        //console.log(req.files)
        infoLibro.portada =  req.files.length == 0 ?  models.findOne(req.params.id).portada : req.files[0].filename

       // console.log(infoLibro)
        models.actualizar(infoLibro)
        res.redirect("/products")
        }
    },
    delete: (req, res, next) => {

        let product = models.findOne(req.params.id)
        models.delete(product);
        

        res.redirect("/products")
    }
}