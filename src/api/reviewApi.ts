import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Review } from '../types';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({

    getPosts: builder.query<Review[], void>({
      query: () => '/reviews',
      providesTags: ['Reviews'],
    }),

    addPost: builder.mutation<Review, Review>({
      query: (newReview) => ({
        url: '/reviews',
        method: 'POST',
        body: newReview,
      }),
      invalidatesTags: ['Reviews'],
    }),

    deletePost: builder.mutation<void, string>({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reviews'],
    }),

    updatePost: builder.mutation<Review, { id: string; updated: Partial<Review> }>({
      query: ({ id, updated }) => ({
        url: `/reviews/${id}`,
        method: 'PATCH',
        body: updated,
      }),
      invalidatesTags: ['Reviews'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = reviewsApi;
