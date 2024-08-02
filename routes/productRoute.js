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
        // const removed = await productController.deleteProduct(deleteRecord);
    
        await productController.deleteProduct(deleteRecord)
        .then((deletedDoc) => {
            console.log(deletedDoc);
            res.send(deletedDoc);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        })
        
        // res.json({
        //     status: "Removal successful",
        //     document: deleteRecord,
        //     response: removed
        // });
    } catch(error) {
        res.send(error);
    }
}

module.exports = {addProduct, deleteProduct};