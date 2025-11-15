import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AUTH_STORAGE_KEY } from '../../shared/constants/globals';
import type { User } from '../../types';
import { loadFromStorage } from '../../shared/helpers/localSlorage';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

const loadInitialState = (): AuthState => {
  const stored = loadFromStorage<{ user: User }>(AUTH_STORAGE_KEY);
  return {
    user: stored?.user || null,
    isAuthenticated: !!stored?.user,
    error: null,
  };
};

const initialState: AuthState = loadInitialState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user: action.payload }));
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user: action.payload }));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem(AUTH_STORAGE_KEY);
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { register, login, logout, setAuthError } = authSlice.actions;
export default authSlice.reducer;
