import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE } from "redux-persist";
import { PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { authPersistReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
