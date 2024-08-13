import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductList from '../features/productList.js/component/product_list'
 
const Home = () => {
  return (
    <div className=''>
       <Navbar>
        <ProductList>
            
        </ProductList>
       </Navbar>
       
    </div>
  )
}

export default Home
