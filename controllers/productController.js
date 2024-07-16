const productModel = require('../models/productModel')

function createProduct(req) {
    const productInstance = productModel({title: req.body.title, description: req.body.description, price: Number(req.body.price), supplier: req.body.supplier});
    return productInstance;
}

module.exports = {createProduct};