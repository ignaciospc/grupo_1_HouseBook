const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index");

/* GET home page. */
router.get('/', controllerIndex.home);

router.get("/cart", controllerIndex.cart);

router.get("/contact",controllerIndex.contact);

router.get('/terminos', controllerIndex.termininos);

router.get("/preview", (req, res) =>{ res.render("housebook/preview")})



// -----------------------TESTING--------------------------- //
//test crear cookie y session
router.get('/asd', (req, res) => {
    res.locals.fgh = 456
    req.session.asd = 123;
    res.cookie("test", req.session.asd, {expires: new Date(Date.now() + 1000*60*10)}).send('cookie send')
    console.log("res: " + res.locals.fgh);
    
    
})
//test matar la cookie y session
router.get('/destroy', (req, res) => {
    res.cookie("test", null, {maxAge: -1}).send('cookie destroy')
    console.log('req.session.asd creada del create', req.session.asd) // existe
    req.session.destroy();
    console.log('req.session despues de destruirla', req.session) // no existe
    console.log('res.locals.fgh creada del create',res.locals.fgh)
})


const db = require("../database/models")
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
/*
let categorias = ['novedades', 'ofertas','mas-vendidos','informacion', 'terror',
'arte', 'biografia', 'libro-chicos',
'crimen', 'thriller', 'ficcion', 'novelas-visuales', 'manga', 'historia', 'fantasia',
'negocio', 'leyes-finanzas', 'computacion', 'diccionario-lenguaje', 'entretenimiento', 'salud', 'hogar-jadin',
'humor', 'medicina', 'historia-naturaleza', 'autoayuda', 'poesia-drama', 'religion', 'romance',
'ciencia-greografia', 'ciencias-sociales', 'deportes', 'eduacion', 'teconologia-ingenieria',
'transporte', 'viajes-vacaciones', 'adultos', 'jovenes', 'psicologia']
let updateCategoria = [36,40,27,41,11,40,2]
let autores = ['Luisito Comunica', 'Mario Luna', 'Celeste Ng', 'Herman Melville' , 
' Bernardine Evaristo', 'Robin Diangelo', 'Dross Dross'];
let autores_id = [1,5,4,2, 7,3,6]
*/

let detalles = {
    formato_id: 2,
    dimensiones: "150 x 229 x 15mm | 249g",
    fecha_publicacion: "10 Dec 2019",
    editorial: "Planeta Publishing",
    idioma_id: "Spanish",
    isbn : 9786070762628,    
}
/*
1	PDF
2	Fisico

Aleman
English
Spanish

*/
router.get("/dbCreate", (req, res) => { //crear en db
     //nueva categoria
     /*
        db.detalle.create({
            isbn : detalles.isbn,
            dimensiones: detalles.dimensiones,
            fecha_publicacion: detalles.fecha_publicacion,
            editorial: detalles.editorial,
            idioma_id: detalles.idioma_id,
            formato_id: detalles.formato_id,
        })
    

    db.libro.update({
        detalle_isbn : detalles.isbn
    },
    {
        where: {
            id : 18
        }
    })
*/
    
    res.send("creado")
})

router.get("/dbDelete", (req, res) => { //borrar en db
    /*
    db.detalle.destroy({
        where : {isbn : 2147483647}
            // { [Op.like]: "thomas" //like es una operacion, ergo hay que llamar Sequlize y Op } }
    })
    */
    res.send("borrado")
})

router.get("/dbConsulta", async(req, res) => { //consultas a la db

    //resultado = await db.sequelize.query('SELECT * FROM libros')
    /*
    let resultado = () => {
        return db.libro.findOne({
        where: {
            id: 12
        }
    }).then(r => {
        //console.log('resultado de db:', r)
        return r;
    })
}
    resultado().then(r => {
        console.log(r)}
    )
    */
   
    libro = await db.usuario.findOne({
        where: {
            id : 1
        },
        /*
        include: [
            {association: 'categorias'},
            {association: 'idioma'},
            {association: 'autores'},
            {association: 'detalle'},
        ]
        */

    })
    //.then(function(resultado) {
        console.log(libro)
        res.send(libro)
    //})

    //detalle_id = await db.detalle.findAll()
    /*
        resultado = await db.categoria.findAll({
        include: [{association: 'libros'}]
    })
       console.log(resultado[0].dataValues.libros[0].dataValues)
    */

    /* db.sequelize.query('SELECT * FROM usuarios').then(r =>{
        console.log(r)
    })*/
    
    
})

router.get("/dbUpdate", (req, res) => {
    /*
    db.idioma.update({
        name: "Germany"
    }, {
        where : {
            name: "Aleman"
        }
    })
    */
    res.send("actualizado")
})
module.exports = router;
//'consultado en la terminal.'