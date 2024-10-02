//might have to look at https://learn.microsoft.com/en-us/answers/questions/1026379/access-to-fetch-been-blocked-by-cors-policy-react

const db = require('../database/db');

const productController = require('../controllers/productController');

db.connectMongo();

addProduct = async (req, res) => {
    try {
        const newProduct = productController.createProduct(req);
        // console.log(newProduct);
        let added = await newProduct.save();
        // console.log(added);
        res.json({
            result: `Product with title: ${added.title} (ObjectID: ${added._id}) has been added`
        });
    } catch(error) {
        res.send(error);
    }
}

deleteProduct = async (req, res) => {
    try {
        const deleteRecord = req.body;
    
        await productController.deleteProduct(deleteRecord)
        .then((deletedDoc) => {
            // console.log(deletedDoc);
            res.json(deletedDoc);
            // res.json({
            //     status: "Removal successful",
            //     document: deletedDoc,
            //     response: removed
            // });
        })
        .catch((error) => {
            // console.log(error);
            res.send(error);
        })
    } catch(error) {
        res.send(error);
    }
}

getAllProducts = async (req, res) => {
    try {
        const foundProducts = await productController.getAllProducts();

        if (foundProducts) {
            //res.setHeader("Access-Control-Allow-Origin", 'http://localhost:5173');
            res.json(foundProducts);
        } else {
            throw new Error("Something went wrong...");
        }
        
    } catch(error) {
        res.status(400).send(error);
    }
}

getProduct = async (req, res) => {
    try {
        const searchProduct = req.body;
        const foundProducts = await productController.getProduct(searchProduct);

        if (foundProducts) {
            res.status(200).send(`The following products have been found: \n ${foundProducts}`);
        } else {
            throw new Error("Something went wrong...");
        }
        
    } catch(error) {
        res.status(400).send(error);
    }
}

getProductByID = async (req, res) => {
    try {
        const searchProduct = req.params.id;
        const foundProduct = await productController.getProductByID(searchProduct);

        res.send(foundProduct);
    } catch(error) {
        res.send(error);
    }
}

updateProductByID = async (req, res) => {
    try {
        const updateProductID = req.params.id;
        const updateProductBody = req.body;
        const updatedProduct = await productController.updateProductByID(updateProductID, updateProductBody);
        res.send(`The following product has been updated: \n ${updatedProduct}`);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {addProduct, deleteProduct, getProduct, getProductByID, updateProductByID, getAllProducts};