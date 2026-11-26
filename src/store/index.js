import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./slices/favouriteslice"

export const store = configureStore({
    reducer: {
      favourite :  favouriteReducer,
    },
})