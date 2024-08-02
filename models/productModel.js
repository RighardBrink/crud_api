const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    supplier: String
})

//export model with name, schema and collection as params respectively
module.exports = mongoose.model('product', productSchema, "products");
