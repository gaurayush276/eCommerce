import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 import { createOrder } from './OrderApi';
const initialState = {
  orders: []  , 
  value : 0  ,
};

export const createOrderAsync = createAsyncThunk(
    'orders/createOrder',
    async (item) => {
      const response = await createOrder (item);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
 
 
export const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // here the added items will be pushed in the array so we are  pushing 
        state.orders.push(action.payload);
      })
       
  },
});
 
export const { increment } = orderSlice.actions;

export default orderSlice.reducer;