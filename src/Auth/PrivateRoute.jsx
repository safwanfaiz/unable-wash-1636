
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {} from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from '../Utils/firebase'

const PrivateRoute = ({children}) => {
  const [auth,setAuth] =useState(false);
  useEffect(()=>{
    onAuthStateChanged(UserAuth, (user) => {
      if (user) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    });
  },[])
  
    const location =useLocation();
    console.log(auth,"auth")
    if(!auth){
       return  <Navigate to="/login/student" replace state={{data:location.pathname}}/>
    }
  return children
}

export default PrivateRoute