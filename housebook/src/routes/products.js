const express = require('express');
const router = express.Router();
const controllerProdcuts = require("../controllers/products");

const path = require("path");
const {check, body} = require("express-validator")

//middlewares
const middlewareProductCreate = require(path.join(__dirname, '..', 'middlewares', 'productsCreate'))
const upload = require(path.join(__dirname, '..' , 'middlewares' , 'uploadImage'))



router.get("/", controllerProdcuts.products);

router.get("/create",controllerProdcuts.create);

router.post("/", upload.any(), middlewareProductCreate,  controllerProdcuts.createBook);

router.get("/:id", controllerProdcuts.details);

router.get("/:id/edit", controllerProdcuts.editForm);

router.put("/:id/", upload.any(), middlewareProductCreate, controllerProdcuts.edit);

router.delete("/:id", controllerProdcuts.delete);

module.exports = router;