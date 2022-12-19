
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const Auth = useSelector(state=> state.AuthReducer.isAuth)
    const location =useLocation();
    console.log(Auth,"auth")
    if(!Auth){
       return  <Navigate to="/login/student" replace state={{data:location.pathname}}/>
    }
  return children;
}

export default PrivateRoute