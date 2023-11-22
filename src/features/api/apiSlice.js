import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { mokapiUrl } from '../../components/utils/constants';



export const apiSlice = createApi(({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: mokapiUrl}),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `products/${id}`,
            providesTags: ['Product'],
        })
    })
}))


export const { useGetProductQuery } = apiSlice;

export default apiSlice.reducer;