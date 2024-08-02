const productModel = require('../models/productModel')

function createProduct(req) {
    const productInstance = new productModel({title: req.body.title, description: req.body.description, price: Number(req.body.price), supplier: req.body.supplier});
    return productInstance;
}

const deleteProduct = function (req) {
    return new Promise(async function (resolve, reject) { 
        await productModel.findOneAndDelete(req)
        .then((deletedDoc) => {
            console.log(deletedDoc);
            resolve(deletedDoc);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    });
}

module.exports = {createProduct, deleteProduct};