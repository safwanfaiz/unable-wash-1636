import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from '../Auth/PrivateRoute'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { SignUp } from '../Components/SignUp'
import CartPage from '../Pages/CartPage'
import { HomePage } from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'

export const MainRoute = () => {
  return (
    <>
     {/* <ToastContainer position="top-center" theme="dark" /> */}
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login/student' element={<LoginPage/>}/>
      <Route path='/login/company' element={<LoginPage/>}/>
      <Route path='/register/student' element={<SignUp/>}/>
      <Route path='/register/student' element={<SignUp/>}/>
      <Route path='/cart/' element={<CartPage/>}/>
      <Route path='/cart/:id' element={<h1>Singelpage</h1>}/></Routes>
    <Footer/>
     </>

  )
}
