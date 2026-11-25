import { createSlice } from "@reduxjs/toolkit";
import { Search } from "lucide-react";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        Search: "",
        format: "",
        isPaid : "",
        category  : "" ,
    },
    reducers: {
        setFormat(state , action){
            state.format = action.payload

        },

        setisPaid(state , action){
            state.isPaid = action.payload
        }
        //  state.isPaid = action.payload === "free" ? false : action.payload === "paid" ? true : "" ; 
    }
})
export const {setFormat , setisPaid} = filterSlice.actions
export default filterSlice.reducer