import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import dbConnection from './config/database.js'

import productRoutes from './routes/productRoute.js'

import {notFound, errorHandler} from './middleware/middlewareError.js'

const app = express();

dbConnection();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>This is a test broadcast</h1>')
})

// app.get('/api/products', (req, res) => {
//     res.json(products);
// })

// PRODUCT ROTE
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}`));