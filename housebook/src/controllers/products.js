const path = require('path')
const {validationResult} = require('express-validator')
const error = require(path.join(__dirname, '..', 'models', 'validation'))

const db = require(path.join(__dirname, "..", 'database', 'models'))
const Sequelize = require('sequelize')
const Op = Sequelize.Op

//const models = require(path.join(__dirname, '..', 'models' , 'book'))
module.exports ={
   
    products: async(req, res) => {
        //let product = models.findAll()
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
        res.render("products/products", {product : dbProduct})
    },
    details: async (req, res) => {
        let product;
        //let product = models.findOne(req.params.id)
        try{
        product = await db.libro.findOne({
            where : {
                id : req.params.id
            },
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
    }catch(error){
        res.send(error)
        console.log(error)
        return false
    }
        if (!product) {res.send("producto no encontrado ameo"); return} //ACTIVA POR SI NO ENCUENTRA EL ID
        res.render("products/productDetail", {product})
    }, //end
    create:(req,res) =>{

        res.render("products/productAdd")

    },
    createBook : async (req, res, next) => {
     
        let portada = "";
        //console.log(req.files)
    
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
            dimensiones:req.body.dimensiones,
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
            return false;
        }
        
    else {
        let categoria,
            idioma,
            autor,
            formato;
            try{
        categoria = await db.categoria.findOne({
            where : {
                categoria : {
                    [Op.like] : infoLibro.categoria
                }
            }
        })
        idioma = await db.idioma.findOne({
            where : {
                name : {
                    [Op.like] : infoLibro.idioma
                }
            }
        })
        autor = await db.autor.findOne({
            where: {
                name : {
                    [Op.like] : infoLibro.autor
                }
            }
        })
        formato = await db.formato.findOne({
            where: {
                name : {
                    [Op.like] : infoLibro.formato
                }
            }
        })
        }catch(error){
            res.send(error)
            console.log(error);
            return false
        }
        //infoLibro.portada = req.files[0].filename,
        //models.create(infoLibro)
        await db.libro.create({
            titulo: infoLibro.titulo,
            descripcion: infoLibro.descripcion,
            valoracion: infoLibro.valoracion,
            precio: infoLibro.precio,
            descuento: infoLibro.descuento,
            autor_id: autor.id,
            detalle_isbn: infoLibro.ISBN,
            idioma_id: idioma.name,
            portada: req.files[0].filename,
            categoria: categoria.id,
        })
        await db.detalle.create({
            isbn: infoLibro.ISBN,
            dimensiones: infoLibro.dimensiones,
            fecha_publicacion: infoLibro.fechaPublicacion,
            editorial: infoLibro.editorial,
            idioma_id: idioma.id,
            formato_id: formato.id
        })
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
    delete: async (req, res, next) => {

        //let product = models.findOne(req.params.id)
        //models.delete(product);
        let product;
        try{
            product = await db.libro.findOne({
                where : {
                    id : req.params.id,
                }
            })
        }catch(error){
            res.send(error)
            console.log(error);
            return false;
        }
        await db.detalle.destroy({
            where : {
                isbn : product.detalle_isbn,
            }
        })
        await db.libro.destroy({
            where : {
                id: req.params.id
            }
        })
        setTimeout(() => {
            res.redirect("/products")
        }, 3000);        
    }
}