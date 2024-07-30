import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productList.js/ProductListSlice';
 
export const store = configureStore({
  reducer: {
    product: productReducer,
    
  },
});
