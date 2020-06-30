const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index");
<<<<<<< HEAD
const multer = require("multer");
const path = require("path");


//*******************variable para Subir Imagenes*******************/
var storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, '../public/images/libros');
},
filename : (req, file, cb) => {
    cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
}, 
});
   
var upload = multer({ storage: storage })

=======
>>>>>>> 7eaa178128196ac0cf83f18860370ed44e1511cb

/* GET home page. */
router.get('/', controllerIndex.home);

<<<<<<< HEAD
//rotuer.get Productos
router.get("/products", controllerIndex.products);

router.get("/products/create", controllerIndex.create);
router.post("/products", upload.any(), controllerIndex.createBook);


router.get("/products/:id", controllerIndex.details);

router.get("/products/:id/edit", controllerIndex.editForm)
router.put("/products/:id/", upload.any(), controllerIndex.edit)
router.delete("/products/:id", controllerIndex.delete)

=======
router.get("/cart", controllerIndex.cart);
>>>>>>> 7eaa178128196ac0cf83f18860370ed44e1511cb

router.get("/contact",controllerIndex.contact);

router.get('/terminos', controllerIndex.termininos);


module.exports = router;
