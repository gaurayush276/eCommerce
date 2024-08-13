import React, { useDebugValue, useEffect } from 'react';
import logo from './logo.svg';
 import './App.css';
import Home from './pages/Home';
 import LoginPage from './pages/LoginPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './features/cart/Cart';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetails from './features/productList.js/component/Productdetails';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import NotFound from './pages/NotFound';
import SuccessOrder from './pages/SuccessOrder';
import UserOrders from './features/user/components/UserOrders';
import UserProfile from './features/user/components/UserProfile'; 
import Logout from './features/auth/components/Logout';
import ForgotPassword from './pages/ForgotPassword'; 
 import AdminHome from './pages/AdminHome'
 import AdminProductDetails from './pages/AdminProductDetails' ; 
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import ProductForm from './features/admin/component/ProductForm';

function App() {
    const user = useSelector( selectLoggedInUser) ; 
     
    const dispatch = useDispatch() ; 
useEffect( () =>{
  if ( user )
    dispatch( fetchAllProductByUserIdAsync(user.id)) ; 
} ,[user]) ; 
  

  const appRouter = createBrowserRouter([
    {
      path : '/login',
      element: <LoginPage/>
    },
    {
      path : '/forgot-password',
      element: <ForgotPassword/> 
    },
    {
      path : '/logout',
      element: <Logout/>
    },
    {
      path :'/' ,
      element : <Protected> 
        <Home/>
      </Protected> 
    }
    ,
    {
      path :'/admin' ,
      element : <ProtectedAdmin> 
        <AdminHome/>
      </ProtectedAdmin> 
    }
    ,
    {
      path :'/cart' ,
      element :<Protected> <Cart/> </Protected> 
    }
    ,
    {
      path :'/cart/checkout' ,
      element : <CheckoutPage/>
       
    }
    ,
    {
      path :'/product-detail/:id' ,  
      element :<Protected> <ProductDetails/> </Protected> 
    }
    ,
    {
      path :'/admin/product-detail/:id' ,  
      element :<ProtectedAdmin>  <AdminProductDetails/> </ProtectedAdmin> 
    }
    ,
    {
      path :'/admin/product-form' ,  
      element :<ProtectedAdmin>  <ProductForm/> </ProtectedAdmin> 
    }
    ,
    {
      path :'*' ,  
      element :<NotFound/>
    }
    ,
    {
      path :'orderPlaced/:id' ,  
      element :<SuccessOrder/>
    },
    {
      path : '/orders',
      element : <UserOrders/>
    },
    
    {
      path :'/profile' ,  
      element :<UserProfile/>
    }

  ])
  return (
    <div >
     <RouterProvider  router={appRouter}
     >
      <Outlet/>
     </RouterProvider>
    </div>
  );
}

export default App;
