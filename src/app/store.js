import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productList.js/ProductListSlice';
 import authReducer from '../features/auth/authSlice'
 import cartReducer from '../features/cart/cartSlice'
 import orderReducer from '../features/Orders/OrderSlice'
 import userReducer from '../features/user/userSlice'

 
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth : authReducer ,
    cart : cartReducer ,
    order : orderReducer ,
    user : userReducer , 
  },
});
