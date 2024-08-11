import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUser, fetchLoggedInUserOrder } from './userApi';

 const initialState = {
  userInfo: []  , 
  value : 0  ,
  userOrders:[] ,
};

export const fetchLoggedInUserAsync = createAsyncThunk(
    'orders/fetchLoggedInUser',
    async (item) => {
      const response = await  fetchLoggedInUser(item);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    } 
  );
 
export const fetchLoggedInUserOrderAsync = createAsyncThunk(
    'orders/fetchLoggedInUserOrder',
    async (item) => {
      const response = await  fetchLoggedInUserOrder(item);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
 
 
 
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //  we had to make an api call that's why we had been using the extra reducers but here we have to make a change in the already defiened state so 
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userOrders= action.payload ;
      })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo= action.payload ; 
        
      })
       
       
  },
});
 
export const selectUserOrders =( state)=> state.user.userOrders ;
  
export const selectUserInfo =( state)=> state.user.userInfo  ;  

export default userSlice.reducer;