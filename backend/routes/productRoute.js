import express from 'express';
const router = express.Router();

import asyncHandler from '../middleware/asynchronousHandler.js';
import Product from '../models/productDB.js'

router.get('/', asyncHandler(async (req, res) => {
    // FETHCING 'ALL' PRODUCTS FROM THE DATABASE
    const products = await Product.find({});
    res.json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    //FETCHING A SINGLE PRODUCT
    const product = await Product.findById(req.params.id);  //This is from the Model API

    // ERROR CATCHER IF PAGE IS NOT AVAILABLE
    if(product){
        return res.json(product)
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
}))

export default router;