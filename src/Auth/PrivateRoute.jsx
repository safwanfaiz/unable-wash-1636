import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {} from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from '../Utils/firebase-config'

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
    if(!auth){
       return  <Navigate to="/login/student" replace state={{data:location.pathname}}/>
    }
  return <Navigate to="/cart"/> ;
}

export default PrivateRoute