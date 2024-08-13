import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectLoggedInUser } from '../authSlice';

const ProtectedAdmin = ({children}) => {
    const user = useSelector(selectLoggedInUser) ; 
    // if  not a valid user 
    if ( !user){
      return <Navigate to={'/login'} replace={true}>  </Navigate>
    } 
    
    // if a valid user but not an admin .
    if ( user && user.role !== 'admin') {
      alert("Only Ayush can access this page ") ;
        return <Navigate to={'/'} replace={true}>  </Navigate>
    }


    return children ;
  
}

export default ProtectedAdmin
