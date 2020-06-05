const express = require('express');
const router = express.Router();
const path = require("path");
const controller = require("../controller/controllerIndex")

/* GET home page. */
router.get('/', controller.index);

router.get('/register', controller.register);

router.get('/productDetail', controller.productDetail)


module.exports = router;
