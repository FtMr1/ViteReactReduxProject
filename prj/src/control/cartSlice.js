import {createSlice} from '@reduxjs/toolkit';

import courseItems from '../items';
const initialState = {
    cartItems:courseItems,
    quantity:1,
    total:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems = [];
        },
        removeItem:(state,actions)=>{
            const itemId = actions.payload;
            state.cartItems = state.cartItems.filter((item)=>item.id !== itemId)
        },
        increase:(state,actions)=>{
         const cartItem =  state.cartItems.find((item)=> item.id === actions.payload);
           cartItem.quantity +=1
        },
        decrease:(state,actions)=>{
            const cartItem =  state.cartItems.find((item)=> item.id === actions.payload);
            if(cartItem.quantity > 0){
                cartItem.quantity -=1
            }
              
           },
           calculateTotal:(state)=>{
            let total=0
            let quantity = 0
                state.cartItems.forEach((item)=>{
                 total +=   item.quantity*item.price
                 quantity += item.quantity;
                });
                state.quantity= quantity;
                state.total = total;
           },
    },
})

console.log(cartSlice)

export const {clearCart , removeItem , increase , decrease , calculateTotal} = cartSlice.actions

export default cartSlice.reducer;