import React from 'react';
import logo from './logo.svg';
 import './App.css';
import Home from './pages/Home';
 import LoginPage from './pages/LoginPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
 

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
