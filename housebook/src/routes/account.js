const express = require('express')
const router = express.Router();

const controllerAccount = require('../controllers/account')


router.get("/", controllerAccount.login)

module.exports = router;