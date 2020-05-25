const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/index")


/* GET home page. */
router.get('/', controllerIndex.home);

//router.get('/login')

module.exports = router;
