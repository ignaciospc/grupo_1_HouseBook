const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index")


/* GET home page. */
router.get('/', controllerIndex.home);

//router.get('/login')


router.get("/products", controllerIndex.products)
router.get("/products/:id", controllerIndex.details)

module.exports = router;
