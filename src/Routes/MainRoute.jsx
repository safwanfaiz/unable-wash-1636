import React from "react";
import { Routes, Route } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "../Pages/HomePage";
import Courses from "../Pages/Courses";
import InternShips from "../Pages/InternShips";
import Jobs from "../Pages/Jobs";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import NotFoundPage from "../Pages/NotFoundPage";
import Cart from "../Pages/Cart";
import Profile from "../Pages/Profile";



function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Courses />} />
      <Route
        path="/internships"
        element={
            <InternShips />
        }
      />
      <Route
        path="/jobs"
        element={
            <Jobs />
        }
      />

   
    


      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/dashboard"
        element={
       
            <Dashboard />
         
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AllRouter;
