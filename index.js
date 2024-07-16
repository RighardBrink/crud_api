const express = require('express');
// const cors = require('cors');
require('dotenv').config();

const app = express();
const db = require('./database/db');

// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("Hello World");
})

const productController = require('./controllers/productController');
app.post("/product/addProduct", async (req, res) => {
    try {
        const newProduct = productController.createProduct(req);
        let added = await newProduct.save();
        console.log(added);
        res.send("Success");
    } catch(error) {
        res.send(error);
    }    
})

app.put("/product/removeProduct", async (req, res) => {
    try {
        const deleteRecord = req.body;
        let removed = await productController.productModel.deleteOne(deleteRecord);
        res.send(removed);
    } catch(error) {
        res.send(error);
    }
})