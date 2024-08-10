import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 import { addToCart, deleteItem, fetchAllProductByUserId, resetCart, updateCart } from './cartApi';

const initialState = {
  items: []  , 
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
 
export const updateCartAsync = createAsyncThunk(
    'cart/updateCart',
    async (item) => {
      const response = await updateCart(item);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
export const deleteItemAsync = createAsyncThunk(
    'cart/deleteItem',
    async (id) => {
      const response = await deleteItem(id);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
export const resetCartAsync = createAsyncThunk(
    'cart/resetCart',
    async (id) => {
      const response = await resetCart(id);
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
        state.items = action.payload;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // replacing the item with some new changes ..
        const index = state.items.findIndex( item => action.payload.id === item.id  )
         state.items[index] = action.payload;
      })
      .addCase(deleteItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex( item => action.payload.id === item.id  )
         state.items.splice( index , 1 ) ; 
      })
      .addCase(resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = [ ] ;
      })
      
  },
});
 
export const { increment } = cartSlice.actions;
 export const selectCart = ( state )=> state.cart.items ; 
 
export default cartSlice.reducer;