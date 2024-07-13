const productModel = require('../models/productModel')

createProduct = (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let supplier = req.body.supplier;

    let product = new productModel(title, description, price, supplier);
}   