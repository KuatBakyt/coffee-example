import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Review } from '../../types';
import {
  fetchReviews,
  postReview,
  deleteReview,
  updateReview,
} from '../../api/reviewApi';

interface ReviewState {
  items: Review[];
  loading: boolean;
  error: string | null;
}

const initialState: ReviewState = {
  items: [],
  loading: false,
  error: null,
};

// 🔄 Thunks
export const loadReviews = createAsyncThunk('reviews/load', async () => {
  return await fetchReviews();
});

export const addReview = createAsyncThunk('reviews/add', async (review: Omit<Review, 'id'>) => {
  return await postReview(review);
});

export const removeReview = createAsyncThunk('reviews/remove', async (id: string) => {
  await deleteReview(id);
  return id;
});

export const editReview = createAsyncThunk(
  'reviews/edit',
  async ({ id, updated }: { id: string; updated: Partial<Review> }) => {
    return await updateReview(id, updated);
  }
);

// 🧠 Slice
const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load
      .addCase(loadReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadReviews.fulfilled, (state, action: PayloadAction<Review[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(loadReviews.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка загрузки отзывов';
      })

      // Add
      .addCase(addReview.fulfilled, (state, action: PayloadAction<Review>) => {
        state.items.push(action.payload);
      })

      // Remove
      .addCase(removeReview.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((r) => r.id !== action.payload);
      })

      // Edit
      .addCase(editReview.fulfilled, (state, action: PayloadAction<Review>) => {
        const index = state.items.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export default reviewSlice.reducer;
