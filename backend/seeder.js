import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import user from './data/user.js';
import products from "./data/products.js";

import Order from './models/orderDBModel.js';
import Products from './models/productDB.js';
import User from './models/userDBModel.js';

import connectToDatabase from './config/database.js';


dotenv.config();

connectToDatabase();

/**DELETE ALL USERS AND PRODUCTS 
 * 1.Avoid Duplicates: 
    --Importing data that may already exist in the database, deleting all existing 
      data first helps prevent duplicate entries.

   2.Data Consistency: 
    --If the data importing is meant to REPLACE the existing data, 
      clearing the database ensures that only the new data will be present after the import.
      This is important for maintaining data consistency.

   3.Testing and Development: 
    --During development and testing, you often need to reset your database to a known state. 
      Deleting all data before importing allows you to easily reset your database.
*/

const importDataToMongoDB = async () => {
  try{
    // API Model.deleteMany
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();

    // CREATE USERS
    const createdUsers = await User.insertMany(user);
    // CREATE ADMIN USER
    const adminUser = createdUsers[0].id;

    //PRODUCTS
    const sampleProducts =  products.map((product) => {
      return {
        ...product, 
        user:adminUser
      };
    });

    // INSERT PRODUCTS
    await Product.insertMany(sampleProducts);

    console.log('Data Imported'.green.inverse);
    process.exit();

  }catch(error){
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }

    

    
}
