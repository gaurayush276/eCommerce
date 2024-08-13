import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Navbar from '../../navbar/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { createProductAsync, selectBrands, selectCategories } from '../../productList.js/ProductListSlice'
import { useForm } from 'react-hook-form'

const ProductForm = () => {

    const brands = useSelector( selectBrands) ; 
    console.log( brands ) ; 
    const categories = useSelector( selectCategories ) ; 
  const { handleSubmit , register }  = useForm() ; 
   const dispatch = useDispatch() ; 
  
  return (
    <div>
        <Navbar/>
        <form className='p-5' onSubmit={( handleSubmit( e =>{
           console.log( e) 
          const product = { ...e } ;
          // adding images Array 
          product.images = [ product.image1 , product.image2 ,  product.image2 ] ; 
          // now removing the rest images Element in e 
          // delete product['image1' ];
          // delete product['image2'] ;
          // delete product['image3'] ;
          delete product.image1 ;
          delete product.image2 ;
          delete product.image3 ;
          console.log( product , typeof(product)) ; 
          dispatch( createProductAsync(product))  ;
          }
          )
           
           
           )}>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Add Product</h2>
        

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Product Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="title"
                 { ...register('title' ,{required : true } )  }
                  name="title"
                  type="text"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
             Description
            </label>
            <div className="mt-2">
              <textarea
              { ...register('description' ,{required : true } )}
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
          </div>
  
     <div className="sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                 { ...register('price' ,{required : true } )  }
                  id="price"
                  name="price"
                  type="text"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Discount
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
              { ...register('discount' ,{required : true } )  }
                  id="discount"
                  name="discount"
                  type="text"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Stock
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                 { ...register('stock' ,{required : true } )  }

                  id="stock"
                  name="stock"
                  type="text"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          
          <div className="sm:col-span-4">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Rating
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  id="rating"
                 { ...register('rating' ,{required : true } )  }
                  name="rating"
                  type="text"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="disc" className="block text-sm font-medium leading-6 text-gray-900">
             Thumbnail
            </label>
            <div className="mt-2">
              <input
                id="thumbnail"
                name="thumbnail"
                { ...register('thumbnail' ,{required : true } )  }
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
          </div>


          <div className="col-span-full">
            <label htmlFor="disc" className="block text-sm font-medium leading-6 text-gray-900">
             image 1
            </label>
            <div className="mt-2">
              <input
              { ...register('image1' ,{required : true } )  }
                id="image1"
                name="image1"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
          </div>


          <div className="col-span-full">
            <label htmlFor="disc" className="block text-sm font-medium leading-6 text-gray-900">
             image 2 
            </label>
            <div className="mt-2">
              <input
              { ...register('image2' ,{required : true } )  }
                id="image2"
                name="image2"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
          </div>


          <div className="col-span-full">
            <label htmlFor="disc" className="block text-sm font-medium leading-6 text-gray-900">
             image 3 
            </label>
            <div className="mt-2">
              <input
                id="image3"
                name="image3"
                { ...register('image3' ,{required : true } )  }
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
          </div>

          

          <div className="sm:col-span-2  ">
            <span  className=' font-semibold text-base text-gray-800'> Brands </span>
            <select
             { ...register('category' ,{required : true } )  }
            className='rounded-xl border-1 border-gray-400  '> 
            <option value={'Choose Brand'}> Choose Brand </option>
                { brands.map( brand =>(
                 <option
                
                  value={brand.value}> {brand.value} </option>
                ))}
            </select>
          </div> 

          <div className="sm:col-span-2  ">
            <span  className=' font-semibold text-base text-gray-800'> Category </span>
            <select
            { ...register('brand' ,{required : true } )  }
              className='rounded-xl border-1 border-gray-400   '> 
                <option
               > Choose Category </option>
            { categories.map( category =>(
                 <option
                 
                 value={category.value}> {category.value} </option>
                ))}
            </select>
          </div>


        </div>
      </div>

     

      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-900">
                    Comments
                  </label>
                  <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="candidates" className="font-medium text-gray-900">
                    Candidates
                  </label>
                  <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="offers" className="font-medium text-gray-900">
                    Offers
                  </label>
                  <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
          
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form> 
   </div>
    
  )
}

export default ProductForm


 

 
