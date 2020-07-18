const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index");

/* GET home page. */
router.get('/', controllerIndex.home);

router.get("/cart", controllerIndex.cart);

router.get("/contact",controllerIndex.contact);

router.get('/terminos', controllerIndex.termininos);

router.get("/preview", (req, res) =>{ res.render("housebook/preview")})



// TEST --------------------------------------------------
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
    console.log(req.session.asd) // existe
    req.session.destroy();
    console.log(req.session) // no existe
    console.log(res.locals.fgh)
})


const db = require("../database/models")
router.get("/db", (req, res) => { //crrear
    db.libro.create({
        titulo: "thomas"
    })
    res.send("creado")
})

router.get("/dbDelete", (req, res) => { //borrar 
    db.libro.destroy({
        where :{id : 1}
    })
    res.send("borrado")
})
module.exports = router;
