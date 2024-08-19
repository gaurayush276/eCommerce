import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectLoggedInUser } from '../authSlice'

const Protected = ({children}) => {
    const user = useSelector(selectLoggedInUser) ; 
  if ( !user) {
    return <Navigate to={'/auth/login'} replace={true}>  </Navigate>
  }
  return children ;

}
export default Protected
