
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import InternShips from "../Pages/InternShips";
import Dashboard from "../Pages/Dashboard";
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
import Internships from "../Pages/Internships/Internships";
import SingleIntership from "../Pages/Internships/SingleIntership";
import InternshipsPost from "../Pages/Internships/InternshipsPost";
import EditInternships from "../Pages/Internships/EditInternships";
import AddJob from "../Pages/Job/AddJob";
import EditJobs from "../Pages/Job/EditJob";
import SingleJob from "../Pages/Job/SingleJob";
import Jobs from "../Pages/Job/Job";





export const MainRoutes=()=>{
  return (
    <>
    <ToastContainer position="top-center" theme="dark" />
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
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

        <Route path='/internships' element={<Internships/>}/>
        <Route path='/internships/:id' element={<SingleIntership/>}/>
        <Route path='/internshipsPost' element={<InternshipsPost/>}/>
        <Route path='/internships/edit/:id' element={<EditInternships/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/jobsPost' element={<AddJob/>}/>
        <Route path='/jobs/edit/:id' element={<EditJobs/>}/>
        <Route path='/jobs/:id' element={<SingleJob/>}/>

      </Routes>
    <Footer/>
    </>

  )

}