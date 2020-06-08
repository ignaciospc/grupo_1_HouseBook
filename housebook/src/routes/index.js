const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index")


/* GET home page. */
router.get('/', controllerIndex.home);

//rotuer.get Productos
router.get("/products", controllerIndex.products) //aca creo que van todos los productos
router.get("/products/create",controllerIndex.create)
router.get("/products/:id", controllerIndex.details)

router.get("/cart", controllerIndex.cart)


module.exports = router;
