
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import UseProfile from '../Hooks/UseProfile'

const PrivateRoute = ({children}) => {
    const {avatar}=UseProfile()
    const location =useLocation();
    if(!avatar){
       return  <Navigate to="/login/student" replace state={{data:location.pathname}}/>
    }
  return children;
}

export default PrivateRoute