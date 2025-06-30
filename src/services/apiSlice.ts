
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiURL = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    endpoints: () => ({}), 
});