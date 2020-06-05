const path = require("path");


const controller = {

    index : (req, res) => {
        
        res.render('housebook/index');

    },
    register : (req, res) => {

        res.render('housebook/register')

    },
    productDetail : (req, res) => {

        res.render('housebook/productDetail')

    },
}

module.exports = controller;