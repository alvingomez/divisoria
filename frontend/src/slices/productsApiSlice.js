import { PRODUCTS_URL } from '../constants';
import {apiSlice} from './apiSlice';

const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        // created endpoint for HomeScreen
        getProducts: build.query({
            query: () => ({url:PRODUCTS_URL,}),
            keepUnusedDataFor:5,
        })

    })
});

export const {useGetProductsQuery} = productsApiSlice;