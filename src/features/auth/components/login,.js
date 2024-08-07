import React, { useEffect, useState } from 'react'
import {useForm}from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux' ;
import { checkUserAsync, createUserAsync, selectError, selectLoggedInUser } from '../authSlice';
import { Navigate, useNavigate } from 'react-router';
const Login = () => {
  const dispatch = useDispatch() ; 
  const { register, handleSubmit , watch , formState : {errors}} = useForm();
  const [toggle , setToggle ] = useState( false ) ; 
  const [password, setPassword]  = useState( ) ; 
  const [email, setEmail]  = useState( '') ; 
  const [confirmPassword , setConfirmPassword  ] = useState( true ) ; 
  const user = useSelector(selectLoggedInUser) ; 
  const navigate = useNavigate() ;
  console.log(user) ; 

  // const user = useSelector(selectLoggedInUser) ; 
  const checkValidData = (email,password , value )=>{

    // rejex expression 
    const emailCheck =  /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email) ;
    const passwordCheck =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ; 
    

    if ( !emailCheck){
 console.log( "Email is not valid")
      setEmail( "Email is not valid")
    }
    else {
      setEmail( "")
    }

    if ( !passwordCheck) {
      console.log( "Password is not valid, please use uppercase ,special char and nums")
  setPassword('Password is not valid, please use uppercase ,special char and nums')
    }
   

else {
  setPassword('') ; 
}
if ( value === password )
  setConfirmPassword( true ) ; 
else 
setConfirmPassword( false ) ; 
  }

  
   
    return (
        <> 
        { user && <Navigate to={'/'} replace={true}>  </Navigate>}
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           <img
             alt="Your Company"
             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
             className="mx-auto h-10 w-auto"
           />
           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Sign in to your account
           </h2>
         </div>
 
         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           <form  onClick={  handleSubmit((data) => {
             !toggle  && ( dispatch(checkUserAsync({email:data.email , password : data.password})))
             toggle  && ( dispatch(createUserAsync({email:data.email , password : data.password})))
             checkValidData( data.email , data.password , data.confirmPassword ) ; 
           } )} method="POST" className="space-y-6">
               <div>
             {
                 toggle && (
                     <div className='mb-3 '> 
                     <label className="block text-sm font-medium leading-6 text-gray-900"> Name </label>
                     <input type='text'
                     id = "name" 
                     { ...register('name', {required: true})}
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     /> 
                     </div>
                 )
             }
               
                 
               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Email address
               </label>
               <div className="mt-2">
                 <input
                   id="email"
                   { ...register('email', {required: true } )}
                   type="email"
                   required
                   autoComplete="email"
                   placeholder='abcd@gmail.com'
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
               <p className=' text-red-600 font-semibold'> {email}</p>
              </div>
 
             <div>
               <div className="flex items-center justify-between">
                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                   Password
                 </label>
                { !toggle && ( <div className="text-sm">
                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                     Forgot password?
                   </a>
                 </div> ) }
               </div>
               <div className="mt-2">
                 <input
                   id="password"
                   
                   {...register('password', {required: true})  }
                   type="password"
                   required
                   autoComplete="current-password"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
               <p className=' text-red-600 font-semibold'>  { password } </p>
             </div>
             {
                 toggle && (
              
                   <div>
                    
                     <div className="flex items-center justify-between">
                       <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                       </label>
                        
                     </div>
                     <div className="mt-2">
                       <input
                         id="confirmPassword"
                         {...register('confirmPassword', {required: true})  }
                         type="password"
                         required
                         autoComplete="current-password"
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       />
                     </div>
   
                     <p className=' text-red-600 font-semibold'>  { confirmPassword === false ? "Password did not match" : '' } </p>
                   </div>
       
                 )
               }
             <div>
               <button
                 type="submit"
                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                 Sign in
               </button>
             </div>
           </form>
 
           <p className="mt-10 text-center text-sm text-gray-500">
             Not a member?{' '}
             <span  onClick={()=> setToggle(!toggle)} className= "cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               {!toggle ? "Create an account"  : "Login Here"}
             </span>
           </p>
         </div>
       </div>  
         
        </>
      )
}

export default Login


 
  