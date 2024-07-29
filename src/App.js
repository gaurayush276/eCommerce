import React from 'react';
import logo from './logo.svg';
 import './App.css';
import Home from './pages/Home';
 import LoginPage from './pages/LoginPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './features/cart/Cart';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetails from './features/productList.js/component/Productdetails';
 

function App() {

  const appRouter = createBrowserRouter([
    {
      path : '/login',
      element: <LoginPage/>
    },
    {
      path :'/' ,
      element : <Home/>
    }
    ,
    {
      path :'/cart' ,
      element : <Cart/>
    }
    ,
    {
      path :'/check' ,
      element : <CheckoutPage/>
    }
    ,
    {
      path :'/product-datail' ,
      element : <ProductDetails/>
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
