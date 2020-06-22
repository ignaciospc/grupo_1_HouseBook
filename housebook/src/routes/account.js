const express = require('express')
const router = express.Router();
const path = require('path')
const controllerAccount = require('../controllers/account')

//middlewares
const middleUserRegister = require(path.join(__dirname , '..', 'middlewares', 'auth', 'register.js' ))

router.get("/", controllerAccount.loginForm) 
router.post('/register', middleUserRegister, controllerAccount.register)

router.post('/login', controllerAccount.login)



module.exports = router;