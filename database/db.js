const mongoose = require('mongoose');
require('dotenv').config();

// Connect MongoDB at default port 3000
let mongo = mongoose.connect(process.env.ATLAS_URI, {
    dbName: 'my_shop'
})
.then(() => { 
    console.log("MongoDB connection established");
})
.catch((error) => {
    console.log(`Error: ${error}`);
});

module.exports = {mongo};