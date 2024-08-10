import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 import { createOrder  } from './OrderApi';
const initialState = {
  orders: []  , 
  value : 0  ,
  currentOrderPlaced :null , 
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
    //  we had to make an api call that's why we had been using the extra reducers but here we have to make a change in the already defiened state so 
    resetCurrentOrder : ( state)=>{
      state.currentOrderPlaced  = null ; 
    }
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
        state.currentOrderPlaced = action.payload ; 
      })
       
       
  },
});
 
export const { resetCurrentOrder } = orderSlice.actions;
export const selectCurrentOrder =( state)=> state.order.currentOrderPlaced  ; 

export default orderSlice.reducer;