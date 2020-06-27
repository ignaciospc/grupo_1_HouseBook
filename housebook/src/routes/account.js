const express = require('express');
const router = express.Router();
const path = require('path');
const controllerAccount = require('../controllers/account');
const {check, validationRuslt, body} = require("express-validator");

//middlewares
const middleUserRegister = require(path.join(__dirname , "../middlewares/validationregister" ))

router.get("/register", controllerAccount.registerForm) 
router.post('/register', middleUserRegister , controllerAccount.register)

router.get('/login', controllerAccount.loginForm)
router.post('/login', controllerAccount.login)




module.exports = router;