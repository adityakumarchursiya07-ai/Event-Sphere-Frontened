import { createSlice } from "@reduxjs/toolkit";

const favouritelice = createSlice({
    name: "favourite",
    initialState: [],
    reducers: {  //reducers
        togelFavourites(state) {

        },//reducer
        removeFavourites(state) {

        },//reducer
        clearFavourites(state) {

        },//reducer
    }

});

export const { togelFavourites, removeFavourites, clearFavourites } = favouritelice.actions; // update state 
export default favouritelice.reducer // connect with store