import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { bASEUrl } from '../../components/utils/constants';
import { buildUrl } from '../../components/utils/common';



export const apiSlice = createApi(({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: bASEUrl }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `/products/${id}`,
            providesTags: ['Product'],
        }),
        getProducts: builder.query({
            query: (params) => buildUrl('/products', params),
            providesTags: ['Product'],
        })
    })
}))


export const { useGetProductQuery, useGetProductsQuery } = apiSlice;

