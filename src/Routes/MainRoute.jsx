
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import Profile from "../Pages/Profile";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from '../Auth/PrivateRoute'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
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
import { Box } from "@chakra-ui/react";

export const MainRoutes=()=>{
  return (
    <>
        <Box w={["70%","100%","100%"]}>
        <ToastContainer autoClose={2500} draggable position="top-center" theme="dark" />
        </Box>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/login/student' element={<LoginPage/>}/>
      <Route path='/login/company' element={<LoginPage/>}/>
      <Route path='/register/student' element={<LoginPage/>}/>
      <Route path='/register/company' element={<LoginPage/>}/>
      <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/> 
      <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>}/>
      <Route path='/course' element={<CoursePage/>}/>
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