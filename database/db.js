const mongoose = require('mongoose');

// Connect MongoDB at default port 3000
async function connectMongo() {
    await mongoose.connect(process.env.ATLAS_URI, {
        dbName: 'my_shop'
    })
    .then(() => { 
        console.log("MongoDB connection established");
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });
} 

async function disconnectMongo() {
    await mongoose.connection.close()
    .then(() => {
        console.log("Mongoose disconnected");
    })
    .catch((error) => {
        console.log(error);
    });
}

module.exports = {connectMongo, disconnectMongo};