import { createSlice } from "@reduxjs/toolkit";

const favouritelice = createSlice({
    name: "favourite",
    initialState: {
        items: []
    },
    reducers: {  //reducers
        toggelFavourites(state, action) {
            
            const event = action.payload ;
            // console.log(event);
            const existingEvent = state.items.find((e) =>  (e?.id || e?._id) === (event?.id || event?._id) ,)
            if (existingEvent) {
                state.items = state.items.filter((e) => 
                   (e?.id || e?._id) !== (event?.id || event?._id)

                )
            }
            else {
                state.items.push(event)

            }
            
        },//reducer
        removeFavourites(state) {

        },//reducer
        clearFavourites(state) {
            state.items = []
        },//reducer
    }

});

export const { toggelFavourites, removeFavourites, clearFavourites } = favouritelice.actions; // update state 
export default favouritelice.reducer // connect with store



