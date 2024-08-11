import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../authApi';
import { selectLoggedInUser, signOutAsync } from '../authSlice';
import { Navigate } from 'react-router';
 
const Logout = () => {
  const dispatch = useDispatch () ; 
  const user = useSelector( selectLoggedInUser ) ; 
    useEffect( () =>{
    dispatch( signOutAsync(user.id)) ; 
     
    } , [])
  return (
    <div>
      { !user && <Navigate to={'/login'}> </Navigate>}
    </div>
  )
}

export default Logout
