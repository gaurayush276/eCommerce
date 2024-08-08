import React, { useEffect } from 'react'

import { useState , useRef} from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Select } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { initializeUseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { current } from '@reduxjs/toolkit'
import { deleteItemAsync, fetchAllProductByUserIdAsync, selectCart, selectCartProducts, updateCartAsync } from './cartSlice'
import { useDispatch } from 'react-redux'
 
// const products = [
//   {
//     id: 1,
//     title: 'Throwback Hip Bag',
//     href: '#',
//     brand: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     thumbnail: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     title: 'Medium Stuff Satchel',
//     href: '#',
//     brand: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     thumbnail: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]


const Cart = () => {
  const [open, setOpen] = useState(true)
  const products = useSelector( selectCart) ; 
  // console.log(products) 
  const dispatch = useDispatch()
 const items = useSelector( selectCart ) ; 
 const navigate = useNavigate()  ;
     
    const [subTotal , setSubTotal] = useState( 0 ) ; 
    const [totalItems , setTotalItems] = useState(0) ;

    const handleQuantity = (e , product ) =>{
     dispatch( updateCartAsync( { ...product , quantity : e.target.value} ) ) ; 
    }

    const removeItem = (product)=> {
      dispatch( deleteItemAsync(product.id)) ; 
    }

    useEffect( () =>{
      let count = 0 ; 
      let value = 0 ; 
         products.map( (items  )=>{
           value = value +  items.price * items.quantity ; 
           count = count + (+items.quantity );
       })
       setTotalItems(count) ; 
       setSubTotal( value ) ; 
      //  console.log( subTotal ) ; 
    } , [products])
    
    return (
      <div  className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                         <div className="mt-8 ">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    alt={product.imageAlt}
                                    src={product.thumbnail}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
    
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                         {product.title}
                                      </h3>
                                      <p className="ml-4">{product.price  + ' $'}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 
                                      <div className=' flex-col items-center' > 
                                         <select onChange={ (e) => handleQuantity ( e, product )} value={product.quantity}> 
                                      
                                          <option  value="1" > 1  </option>
                                          <option value="2"> 2  </option>
                                          <option  value="3" > 3  </option>
                                          <option value="4"> 4  </option>
                                          
                                         </select>
                                      </div>
                                      
                                      </p>
    
                                    <div className="flex">
                                      <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={ () => removeItem (product)}>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    
    
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{ subTotal + ' $' } </p>
                         
                      </div>
                    
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <p>{ totalItems + ' items' } </p>
                      </div>
                      
                       <div className="mt-6">
                        <div 
                          onClick={()=> navigate('checkout')}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <Link to={'/'}>
                          <div
                            
                            onClick={() => setOpen(false)}
                            className="font-medium text-indigo-600 hover:text-indigo-500"

                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </div> </Link>
                         
                        </p>
                      </div>
                    </div>
      </div>
      )
}

export default Cart



 