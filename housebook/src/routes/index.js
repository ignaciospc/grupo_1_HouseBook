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
router.get("/db", (req, res) => { //crear en db
    db.usuario.create({
        user: "thomas"
    })
    res.send("creado")
})

router.get("/dbDelete", (req, res) => { //borrar en db
    db.usuario.destroy({
        where :{user :{
            [Op.like]: "thomas" //like es una operacion, ergo hay que llamar Sequlize y Op
        } }
    })
    res.send("borrado")
})

router.get("/dbConsulta", async(req, res) => { //consultas a la db

    let resultado = await db.sequelize.query('SELECT * FROM usuarios')
    console.log(resultado)

    /* db.sequelize.query('SELECT * FROM usuarios').then(r =>{
        console.log(r)
    })*/
    res.send('consultado en la terminal.')
})
module.exports = router;
