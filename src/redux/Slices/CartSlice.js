import { createSlice } from "@reduxjs/toolkit";

export const CartSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            // action.payload => what input parameter we have sent .it displays it as action.payload
            state.push(action.payload);
        },
        remove :(state,action) => {
            // retain only those items in state whose id is not equal to action.payload
            return state.filter((item) => item.id !== action.payload);
        }
    }
});


export const{add,remove}=CartSlice.actions;

export default CartSlice.reducer;
