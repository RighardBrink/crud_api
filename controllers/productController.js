const productModel = require('../models/productModel');

const createProduct = function (req) {
    const productInstance = new productModel({title: req.body.title, description: req.body.description, price: Number(req.body.price), supplier: req.body.supplier});
    return productInstance;
}

const deleteProduct = function (req) {
    return new Promise(async function (resolve, reject) { 
        await productModel.findOneAndDelete(req)
        .then((deletedDoc) => {
            // console.log(deletedDoc);
            resolve(deletedDoc);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    });
}

const getAllProducts = function () {
    const productsFound = productModel.find({});
    return productsFound;
}

const getProduct = function (req) {
    const productsFound = productModel.find(req);
    return productsFound;
}

const getProductByID = function (req) {
    const productFound = productModel.findById(req);
    return productFound;
}

const updateProductByID = function (id, newDoc) {
    const returnDoc = productModel.findByIdAndUpdate(id, newDoc, {new: true});
    
    return returnDoc;
}

module.exports = {createProduct, deleteProduct, getProduct, getProductByID, updateProductByID, getAllProducts};