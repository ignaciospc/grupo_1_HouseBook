const {check, body} = require('express-validator');

module.exports = [
    check("usuario").normalizeEmail({all_lowercase: true}),
]

