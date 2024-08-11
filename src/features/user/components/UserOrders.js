import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../auth/authSlice'
import { fetchLoggedInUserOrderAsync, selectUserOrders} from '../userSlice';
import { Link } from 'react-router-dom';
 

const UserOrders = () => {

    const user = useSelector( selectLoggedInUser ) ; 
    const dispatch = useDispatch() ; 
    const orders = useSelector(  selectUserOrders );  
    const [subTotal , setSubTotal ] = useState(0) ; 
    const [totalItems , setTotalItems ] = useState(0) ; 

    // console.log( orders) ;
    
    
    useEffect(() => {
        dispatch( fetchLoggedInUserOrderAsync(user.id)) ;
        let value = 0 ; 
        orders.map ( (order)=> 
        value =  value + order.subTotal )  ;
        setSubTotal( value ) ; 
        let items = 0 ; 
        orders.map ( (order)=> 
          items =  items + order.totalItems )  ;
        setTotalItems( items ) ; 
    } , [] ) ;  


     

     
    
   
    
  return (
    <div> 
      <div className=' flex w-full  bg-gray-800'>
      <h1 className='pl-5 text-3xl text-gray-200  italic  rounded-full m-3'> Your Orders </h1> </div>
    
         {
          orders.map( order =>(
            <div  className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-white p-2 rounded-xl m-2">
            <div className="mt-8 ">
           <div className="flow-root">
             <ul role="list" className="  divide-y divide-gray-200 ">
               {order.items.map((item) => (
                 <li key={item.id} className="flex py-6">
                
                   <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                     <img
                       alt={item.imageAlt}
                       src={item.thumbnail}
                       className="h-full w-full object-cover object-center"
                     />
                   </div>

                   <div className="ml-4 flex flex-1 flex-col">
                     <div>
                       <div className="flex justify-between text-base font-medium text-gray-900">
                         <h3>
                            {item.title}
                         </h3>
                         <p className="ml-4">{item.price  + ' $'}</p>
                       </div>
                       <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                     </div>
                     <div className="flex flex-1 items-end justify-between text-sm">
                       <p className="text-gray-500">{item.quantity }
                         </p>

                     </div>
                   </div>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       

       
</div>
          ))
         }
         <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 bg-white p-2 rounded-xl m-2 flex  justify-between">
          <div className=' text-xl text-gray-800'> Total Items: {totalItems} </div>
          <div className=' text-xl text-gray-800'> SubTotal : {subTotal} $</div>
           </div>
           <div >
           <Link  to={'/'}>
                          <div
                            className="font-medium text-indigo-600 hover:text-indigo-500 text-center"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </div> </Link>
                            </div>
           
      
    </div>
  )
}

export default UserOrders
