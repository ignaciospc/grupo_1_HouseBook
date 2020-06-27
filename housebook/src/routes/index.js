const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index");
const multer = require("multer");
const path = require("path");

<<<<<<< HEAD
const {check, body} = require("express-validator")

//middlewares
const middlewareProductCreate = require(path.join(__dirname, '..', 'middlewares', 'productsCreate'))
const upload = require(path.join(__dirname, '..' , 'middlewares' , 'uploadImage'))
=======

>>>>>>> pruebasIS
//*******************variable para Subir Imagenes*******************/


/* GET home page. */
router.get('/', controllerIndex.home);

//rotuer.get Productos
router.get("/products", controllerIndex.products);

<<<<<<< HEAD
router.get("/products/create",controllerIndex.create);
=======
router.get("/products/create", controllerIndex.create);
router.post("/products", upload.any(), controllerIndex.createBook);
>>>>>>> pruebasIS


router.post("/products", upload.any(), middlewareProductCreate, controllerIndex.createBook);

router.get("/products/:id", controllerIndex.details);

router.get("/products/:id/edit", controllerIndex.editForm)
router.put("/products/:id/", upload.single('portada'), middlewareProductCreate, controllerIndex.edit)
router.delete("/products/:id", controllerIndex.delete)



router.get("/cart", controllerIndex.cart);


module.exports = router;
