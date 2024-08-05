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
            res.send(`Removal of document ${deletedDoc} successful`);
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

getProduct = async (req, res) => {
    try {
        const searchProduct = req.body;
        const foundProduct = await productController.getProduct(searchProduct);

        res.send(`The following products have been found: \n ${foundProduct}`);
    } catch(error) {
        res.send(error);
    }
}

module.exports = {addProduct, deleteProduct, getProduct};