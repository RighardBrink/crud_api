const mongoose = require('mongoose');

// Connect MongoDB at default port 3000
async function connectMongo() {
    await mongoose.connect(process.env.ATLAS_URI, {
        dbName: 'my_shop',
        serverSelectionTimeoutMS: 60000
    })
    .then(() => { 
        console.log("MongoDB connection established");
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });
} 

process.on('SIGINT', () => {
    mongoose.connection.close();
    console.log("Mongo connection terminated");
    process.exit(0);
})

// async function disconnectMongo() {
//     await mongoose.disconnect()
//     .then(() => {
//         console.log("Mongoose disconnected");
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }

module.exports = {connectMongo};