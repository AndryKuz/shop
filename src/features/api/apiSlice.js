import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { bASEUrl } from '../../components/utils/constants';



export const apiSlice = createApi(({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: bASEUrl }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `/products/${id}`,
            providesTags: ['Product'],
        })
    })
}))


export const { useGetProductQuery } = apiSlice;

