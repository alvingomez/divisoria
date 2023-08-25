import express from 'express';
import products from './data/products.js';

import dotenv from 'dotenv';

const app = express();


dotenv.config();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>This is a test broadcast</h1>')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    console.log(req.params)
    const findProduct = products.find((product) => product._id === req.params.id );
    res.json(findProduct);
})


app.listen(port, () => console.log(`Server is listening on port ${port}`));