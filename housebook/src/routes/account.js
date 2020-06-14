const express = require('express')
const router = express.Router();

const controllerAccount = require('../controllers/account')


router.get("/", controllerAccount.login) 
router.post('/', controllerAccount.loginUser)



module.exports = router;