import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./slices/favouriteslice"
import filterReducer from "./slices/filterSlice"

export const store = configureStore({
    reducer: {
      favourite :  favouriteReducer,
      filters : filterReducer,
    },
})