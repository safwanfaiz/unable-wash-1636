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
import CoursePage from '../Pages/CoursePage'
import WrongRoute from '../Pages/WrongRoute'
import { EditCartData } from '../Components/EditAdmindata'
import { Admin } from '../Pages/Admin'

export const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>
     {/* <ToastContainer position="top-center" theme="dark" /> */}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login/student' element={<LoginPage/>}/>
      <Route path='/login/company' element={<LoginPage/>}/>
      <Route path='/register/student' element={<SignUp/>}/>
      <Route path='/register/student' element={<SignUp/>}/>
      <Route path="/admin" element={<Admin/>}/> 
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/course' element={<CoursePage/>}/>
      <Route path='/cart/:id' element={<h1>Singelpage</h1>}/>
      <Route path="/:displayName/:id/:title/edit" element={<EditCartData/>} />
      <Route path="*" element={<WrongRoute/>} />
      </Routes>
      {/* <Route path="/course" element={<CoursePage/>}/> */}
    <Footer/>
    </>

  )
}
