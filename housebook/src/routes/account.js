const express = require('express');
const router = express.Router();
const path = require('path');
const controllerAccount = require('../controllers/account');

//middlewares
const middleUserRegister =  require(path.join(__dirname , "../middlewares/validationRegister" ))
const hasLogged =           require(path.join(__dirname, '..', 'middlewares', 'auth', 'hasLogged'))
const hasNotLogged =        require(path.join(__dirname, '..', 'middlewares', 'auth', 'hasNotLogged'))
const middleUserLogin =     require(path.join(__dirname , "../middlewares/validationLogin" ))


router.get("/register", hasNotLogged, controllerAccount.registerForm) 
router.post('/register', middleUserRegister , controllerAccount.register)

router.get('/login', hasNotLogged, controllerAccount.loginForm)
router.post('/login', middleUserLogin , controllerAccount.login)

router.get('/profile/logout', hasLogged, controllerAccount.logout)
router.get('/profile', hasLogged, controllerAccount.profileUser)

module.exports = router;