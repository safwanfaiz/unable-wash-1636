
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import Courses from "../Pages/Courses";
import InternShips from "../Pages/InternShips";
import Jobs from "../Pages/Jobs";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Cart from "../Pages/Cart";
import Profile from "../Pages/Profile";
import { ToastContainer } from 'react-toastify'
import PrivateRoute from '../Auth/PrivateRoute'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { SignUp } from '../Components/SignUp'
import CartPage from '../Pages/CartPage'
import LoginPage from '../Pages/LoginPage'
import CoursePage from '../Pages/CoursePage'
import WrongRoute from '../Pages/WrongRoute'
import { EditCartData } from '../Components/EditAdmindata'
import { Admin } from '../Pages/Admin'




function AllRouter() {
  return (
    <>
    <ToastContainer position="top-center" theme="dark" />
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/internships" element={ <InternShips />}/>
      <Route path="/jobs" element={<Jobs />}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={ <Dashboard /> }/>
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
    <Footer/>
    </>

  )

}

export default AllRouter;
