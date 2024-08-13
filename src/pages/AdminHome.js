import React from 'react'
import Navbar from '../features/navbar/navbar'
 import AdminProductList from '../features/admin/component/AdminProduct_list'

const Home = () => {
  return (
    <div>
       <Navbar>
       
        <AdminProductList>
        </AdminProductList>
       </Navbar>
    </div>
  )
}

export default Home
