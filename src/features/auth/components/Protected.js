import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { selectLoggedInUser } from '../authSlice'

const Protected = ({chilren}) => {
    const user = useSelector(selectLoggedInUser) ; 
  if ( !user) {
    return <Navigate to={'/login'}/>
  }
  return Children ;

}

export default Protected
