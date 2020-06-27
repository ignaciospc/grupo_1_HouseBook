const express = require('express');
const router = express.Router();
const path = require('path');
const controllerAccount = require('../controllers/account');

//middlewares
const middleUserRegister = require(path.join(__dirname , "../middlewares/validationregister" ))
const hasLogged = require(path.join(__dirname, '..', 'middlewares', 'auth', 'hasLogged'))
const hasNotLogged = require(path.join(__dirname, '..', 'middlewares', 'auth', 'hasNotLogged'))

router.get("/register", hasNotLogged, controllerAccount.registerForm) 
router.post('/register', middleUserRegister , controllerAccount.register)

router.get('/login', hasNotLogged, controllerAccount.loginForm)
router.post('/login', controllerAccount.login)

router.get('/profile', hasLogged, (req, res) => res.send('soy una pagina en progreso'))


module.exports = router;