import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authRegister } from "./authOperations";

const initialState = {
  user: { username: null, email: null },
  token: null,
  error: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authRegister.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(authRegister.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      });
  },
});

export const authReducer = authSlice.reducer;

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
