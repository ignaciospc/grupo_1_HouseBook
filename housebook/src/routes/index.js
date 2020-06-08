const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index")


/* GET home page. */
router.get('/', controllerIndex.home);

<<<<<<< HEAD
//router.get('/login')


router.get("/products", controllerIndex.products)
router.get("/products/:id", controllerIndex.details)

=======
//rotuer.get Productos
router.get("/products", controllerIndex.products) 

router.get("/products/create",controllerIndex.create)
router.post("/products",controllerIndex.createBook)
router.get("/products/:id", controllerIndex.details)

router.get("/cart", controllerIndex.cart)


>>>>>>> pruebasIS
module.exports = router;
