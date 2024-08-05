require('dotenv').config();
const express = require('express');
// const cors = require('cors');

const app = express();

// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("Hello World");
})

//require productRoute
const productRoute = require('./routes/productRoute');

//allow express to use functions defined in productRoute.js
app.get("/product", productRoute.getProduct);

app.post("/product/addProduct", productRoute.addProduct);

app.put("/product/deleteProduct", productRoute.deleteProduct);

