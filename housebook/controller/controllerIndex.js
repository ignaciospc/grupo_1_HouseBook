const path = require("path");


const controller = {

    index : (req, res) => {
        
        res.render('housebook/index');

    },
    register : (req, res) => {

        res.render('housebook/register')

    },
}

module.exports = controller;