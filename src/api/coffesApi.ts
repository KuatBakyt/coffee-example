import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CartItem } from '../types';

export const coffesApi = createApi({
 reducerPath: "coffesApi", // - имя слайса в Redux Store

 baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}), // baseQuery — базовый URL для всех запросов
 tagTypes: ['Coffes'], //  используется для автоматического обновления кэша
 endpoints: (builder) => ({
    getPosts: builder.query<CartItem[], void>({ // builder.query - GET-запрос
        query: () => '/coffeeItems',
        providesTags: ['Coffes']
    })
 })
})

export const { useGetPostsQuery } = coffesApi;
