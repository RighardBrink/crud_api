const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String, 
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    supplier: String
})

module.exports = mongoose.model('productModel', productSchema);