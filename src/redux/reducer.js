import { createSlice } from '@reduxjs/toolkit';
import all_product from '../assets/all_product';
import { toast } from 'react-toastify';

const initialState = {
    product:all_product,
    cart:JSON.parse(localStorage.getItem("items")) || [],
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const  existingProduct = state.cart.find((cur)=> cur.id === action.payload.id);
            if(existingProduct){
                const addQuantity = state.cart.map((cur)=>{
                    if(cur.id === action.payload.id){
                        return {...cur, quantity: cur.quantity += 1}
                    }
                    return cur;
                })
                state.cart = addQuantity;

            }else{
                state.cart.push(action.payload);
            }
            localStorage.setItem("items",JSON.stringify(state.cart));
            toast.success("Successfully Added To cart")
        },
        productQuantityIncrement:(state,action)=>{
            const updatedCardQuantity = state.cart.map((cur)=>{
                if(cur.id === action.payload){
                    return {...cur, quantity:cur.quantity + 1}
                }
                return cur;
            });
            state.cart = updatedCardQuantity;
            localStorage.setItem("items",JSON.stringify(state.cart));
        },
        productQuantityDecrement:(state,action)=>{
            const updatedCardQuantity = state.cart.map((cur)=>{
                if(cur.id === action.payload){
                    if(cur.quantity > 1){
                        return {...cur, quantity:cur.quantity - 1}
                    }
                }
                return cur;
            });
            state.cart = updatedCardQuantity;
            localStorage.setItem("items",JSON.stringify(state.cart));
        },
        removeFromCart:(state,action)=>{
            const updatedCart = state.cart.filter((cur)=> cur.id !== action.payload);
            state.cart = updatedCart; 
            localStorage.setItem("items",JSON.stringify(state.cart));
            toast.error("Item Successfully Deleted")
        }
    }
})

export const {addToCart, productQuantityIncrement, productQuantityDecrement, removeFromCart} = productSlice.actions;
export default productSlice.reducer;