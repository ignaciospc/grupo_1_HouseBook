const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index");
const multer = require("multer");
const path = require("path");

//*******************variable para Subir Imagenes*******************/
var storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, '../public/images/libros');
},
filename : (req, file, cb) => {
    cb(null, req.body.portada + '-' + Date.now() + path.extname(file.originalname));
}, 
});
   
var upload = multer({ storage: storage })


/* GET home page. */
router.get('/', controllerIndex.home);

router.get("/cart", controllerIndex.cart);

router.get("/products/create",controllerIndex.create);
router.post("/products", upload.any(), controllerIndex.createBook);


router.get("/products/:id", controllerIndex.details);

router.get("/products/:id/edit", controllerIndex.editForm)
router.put("/products/:id/", upload.any(), controllerIndex.edit)
router.delete("/products/:id", controllerIndex.delete)



router.get("/cart", controllerIndex.cart);

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

module.exports = router;
