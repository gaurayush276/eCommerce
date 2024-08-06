import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 import { addToCart, fetchAllProductByUserId } from './cartApi';

const initialState = {
  items: []  , 
  products :[] , 
  value : 0  ,
};

export const addToCartAsync = createAsyncThunk(
    'cart/addToCart',
    async (item) => {
      const response = await addToCart(item);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
export const fetchAllProductByUserIdAsync = createAsyncThunk(
    'cart/fetchAllProductByUserId',
    async (item) => {
      const response = await fetchAllProductByUserId(item);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
 
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // here the added items will be pushed in the array so we are  pushing 
        state.items.push(action.payload);
      })
      .addCase(fetchAllProductByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // here the added items will be pushed in the array so we are  pushing 
        state.products = action.payload;
      })
      
  },
});
 
export const { increment } = cartSlice.actions;
 export const selectCart = ( state )=> state.cart.items ; 
 export const selectCartProducts = ( state )=> state.cart.products ; 

export default cartSlice.reducer;