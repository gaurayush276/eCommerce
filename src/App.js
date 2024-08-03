import React from 'react';
import logo from './logo.svg';
 import './App.css';
import Home from './pages/Home';
 import LoginPage from './pages/LoginPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './features/cart/Cart';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetails from './features/productList.js/component/Productdetails';
import Protected from './features/auth/components/Protected';
 

function App() {

  const appRouter = createBrowserRouter([
    {
      path : '/login',
      element: <LoginPage/>
    },
    {
      path :'/' ,
      element : <Protected> 
        <Home/>
      </Protected> 
    }
    ,
    {
      path :'/cart' ,
      element :<Protected>
        <Cart/>
         </Protected> 
    }
    ,
    {
      path :'/check' ,
      element :<Protected> 
        <CheckoutPage/>

      </Protected> 
    }
    ,
    {
      path :'/product-detail/:id' ,
      element :<Protected> 
        <ProductDetails/> </Protected> 
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
