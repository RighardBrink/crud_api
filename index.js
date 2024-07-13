const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.post('/product', (req, res) => {
    mongoose.connect(process.env.ATLAS_URI, )
})