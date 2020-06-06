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
    productAdd : (req, res) => {

        res.render('housebook/productAdd');

    },
    productCart : (req, res) => {

        res.render('housebook/productCart');

    },
}

module.exports = controller;