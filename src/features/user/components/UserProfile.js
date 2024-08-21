import React, { useState } from 'react'
import Navbar from '../../navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser, updateUserAsync } from '../../auth/authSlice';
import { useForm } from 'react-hook-form';

const UserProfile = () => {
  const user = useSelector( selectLoggedInUser ) ;
  console.log( user  ) 
  const dispatch = useDispatch( ) ; 
  const [toggleAdd , setToggleAdd ] = useState( false )  ;
   
  const AddAddress = ( )=>{
    setToggleAdd( !toggleAdd ) ; 
  }

  const removeAddress = (index) => {
    // Clone the addresses 
    let newAddresses = [...user.addresses];
    
    // Remove the address at the specified index
    newAddresses.splice(index, 1);
    // console.log( "newAddresses -->  " , newAddresses ) ; 
    const updatedUser = { ...user, addresses: newAddresses };
    // console.log(updatedUser.addresses);  
    dispatch( updateUserAsync( updatedUser)) ; 

  
  };

  const { register , handleSubmit , reset } = useForm() ; 
  return (
    <div>
      <Navbar/>
      <div className='p-4 flex w-full justify-between items-center border-b-2 '> 
        <h1 className='  lg:text-6xl sm:text-2xl font-semibold text-gray-800  m-3'> {user?.addresses[0]?.name} </h1>
        <div className='flex-col gap-4'> 
          <p className='sm:text-base text-[0.5rem] text font-semibold text-gray-800'> Contact :  9336394123</p>
          <p className='sm:text-base  text-[0.5rem] font-semibold text-gray-800'> Gmail :  {user?.email }</p>
          <p className='sm:text-base  text-[0.5rem] font-semibold text-green-500'> Role :  {user?.role }</p>
        </div>
      </div>
      <div className="border-b border-gray-900/10 p-5 ">
      <div className='flex gap-2'>
      <h2 className="text-xl font-semibold leading-7 text-gray-900">Addresses  </h2>
      <button onClick={AddAddress}  className=' px-2 py-1 border-none bg-green-600 hover:bg-green-800 text-white rounded'> Add Address </button>
      </div>
                   
                  <ul role="list">
                    {user?.addresses?.map((address, index) => (
                      <li
                        key={index}
                        className="m-2 rounded  sm:flex  sm:justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                      >
                        <div className="flex   gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {address.name}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              {address.street}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              {address.pinCode}
                            </p>
                          </div>
                        </div>
                        <div className="  sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">
                            Phone: {address.phone}
                          </p>
                          <p className="text-sm leading-6 text-gray-500">
                            {address.city}
                          </p>
                            <img 
                            className="w-5 h-5 rounded-full cursor-pointer"
                             src="https://cdn-icons-png.flaticon.com/512/54/54972.png"
                             onClick={(e)=>  removeAddress( index , address )}/> 
                        </div>
                      </li>
                    ))}
                  </ul>

                { toggleAdd && (<form
            className=" p-6 "
            noValidate
            onSubmit={handleSubmit((data) => {
              console.log(data);
              dispatch(
                updateUserAsync({
                  ...user,
                  addresses: [...user.addresses, data],
                })
              );
              setToggleAdd( !toggleAdd ) ; 
              reset();
            })}
          >
            <div className="space-y-12 ">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register('name', {
                          required: 'name is required',
                        })}
                        id="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        {...register('email', {
                          required: 'email is required',
                        })}
                        type="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        {...register('phone', {
                          required: 'phone is required',
                        })}
                        type="tel"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register('street', {
                          required: 'street is required',
                        })}
                        id="street"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register('city', {
                          required: 'city is required',
                        })}
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register('state', {
                          required: 'state is required',
                        })}
                        id="state"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="pinCode"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register('pinCode', {
                          required: 'pinCode is required',
                        })}
                        id="pinCode"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                onClick={AddAddress}
                   
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Address
                </button>
              </div>

              
            </div>
          </form> ) }
                     
                </div>
    </div>
  )
}

export default UserProfile  ; 
