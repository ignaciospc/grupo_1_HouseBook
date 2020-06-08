const express = require('express')
const router = express.Router();

const controllerAccount = require('../controllers/account')


<<<<<<< HEAD
router.get("/", controllerAccount.login)
=======
router.get("/", controllerAccount.login) 
router.post('/', controllerAccount.loginUser)

>>>>>>> pruebasIS

module.exports = router;