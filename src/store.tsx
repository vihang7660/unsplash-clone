import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/photos/photoSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
