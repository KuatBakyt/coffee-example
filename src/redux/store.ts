import { configureStore } from '@reduxjs/toolkit';
import { coffesApi } from '../api/coffesApi';
import cartReducer from './slices/cartSlice'
import { reviewsApi } from '../api/reviewApi';
import authReducer from './slices/authSlice'


export const store = configureStore({
  reducer: {
    [coffesApi.reducerPath]: coffesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    cart: cartReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(coffesApi.middleware)
    .concat(reviewsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

