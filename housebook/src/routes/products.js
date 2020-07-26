const express = require('express');
const router = express.Router();
const controllerProdcuts = require("../controllers/products");

const path = require("path");

//middlewares
const middlewareProductCreate = require(path.join(__dirname, '..', 'middlewares', 'productsCreate'))
const middlewareProductEdit   = require(path.join(__dirname, '..', 'middlewares', 'productsEdit'))
const upload                  = require(path.join(__dirname, '..' , 'middlewares' , 'uploadImage'))
const isAdmin                 = require(path.join(__dirname, '..', 'middlewares', 'auth', 'isAdmin'))


router.get("/", controllerProdcuts.products);

router.get("/create", isAdmin, controllerProdcuts.create);
router.post("/", upload.any(), middlewareProductCreate,  controllerProdcuts.createBook);

router.get("/:id", controllerProdcuts.details);

router.get("/:id/edit", isAdmin, controllerProdcuts.editForm);
router.put("/:id/", upload.any(), middlewareProductEdit, controllerProdcuts.edit);

router.delete("/:id", isAdmin , controllerProdcuts.delete);

module.exports = router;