import { PRODUCTS_URL } from "../constants";
import {apiSlice} from './apiSlice';

const productApiSlice = apiSlice.injectEndpoints({
    endpoints:(build) => ({
        getProduct:build.query({
            query:(productId) => ({url:`${PRODUCTS_URL}/${productId}`})
        }), 
        keepUnusedDataFor:5
    })
});

export const {useGetProductQuery} = productApiSlice;