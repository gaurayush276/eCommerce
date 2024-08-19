import React, { useEffect, useState } from 'react'
import { fetchAllOrdersAsync, selectOrders } from '../../Orders/OrderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from '../../auth/authSlice';
 

const ProductOrders = () => {

  const dispatch = useDispatch();
  const user = '4f2c'
  const orders = useSelector( selectOrders ) ; 
  const [arr , setArr ] = useState([]) ; 
  console.log( orders ) ;   
  


  console.log( arr  ) ;  

  useEffect(() => {
    console.log('useEffect triggered');
    if (user) {
      const temp = [] ; 
      orders.map( item =>(
        item.items.map( product =>(
          temp.push({ product :product , address : item.selectedAddress } )  
        ))
      ))
      setArr(temp) ;
      console.log('Dispatching fetchAllOrdersAsync');
      dispatch(fetchAllOrdersAsync(user));
    }
  }, [dispatch, user]);

  return (
    <div>
      <>
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <section className="relative py-16 bg-blueGray-50">
    <div className="w-full mb-12 px-4">
      <div
        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-gray-900 text-white"
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
              <h3 className="font-semibold text-lg text-white"> Orders </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto ">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-white border-gray-600">
                 Orders No.
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-white border-gray-600">
                  Items
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-white border-gray-600">
                 Price
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-white border-gray-600">
                  Status
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-white border-gray-600">
                  Quantity
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-white border-gray-600">
                  Shipping Address
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-800 text-white border-gray-600" />
              </tr>
            </thead>
            <tbody> 
            {/* {arr.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{item.product.title}</th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.product.price}</td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.product.availabilityStatus}</td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.product.quantity}</td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.address}</td>  
            </tr>
          ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  </section>
</>

    </div>
  )
}

export default ProductOrders
