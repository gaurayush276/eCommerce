import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductList from '../features/productList.js/component/product_list'

const Home = () => {
  return (
    <div>
       <Navbar>
       <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 ">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">E Commerce</h1>
          </div>
        </header>
        <ProductList>
            
        </ProductList>
       </Navbar>
    </div>
  )
}

export default Home
