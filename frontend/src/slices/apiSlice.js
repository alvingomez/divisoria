import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { PRODUCTS_URL } from '../constants';

const baseQuery = fetchBaseQuery({baseurl:PRODUCTS_URL})

export const productsApiSlice = createApi({
    baseQuery,
    tagTypes:['Product', 'Order', 'Paypal'],
    endpoints: (build) => { },
    keepUnusedDataFor:5,
})
























