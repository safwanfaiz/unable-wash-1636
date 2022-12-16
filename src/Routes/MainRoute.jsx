import React from "react";
import { Routes, Route } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
import Home from "../Component/Home/Home";
import Courses from "../Pages/Courses/Courses";
import InternShips from "../Pages/InternShips/InternShips";
import JobsPage from "../Pages/Job/JobsPage";
import SearchPage from "../Pages/Search/SearchPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AvilableInter from "../Pages/AvilableInter/AvilableInter";
import AdminDashBoard from "../Component/AdminDahBoard/AdminDashBoard";
import SignIngPage from "../Pages/Register/SignIngPage";
import Step2 from "../Pages/Register/Step2";
import LoginPage from "../Pages/Login/LoginPage";
import CartPages from "../Pages/CartPages";
import ViewAndAplly from "../Pages/ViewAndAplly";
import ChangePassword from "../Pages/ChangePassword";
import ProfilePage from "../Pages/Profile/Profile";
import DashBoard from "../Component/Dashboard/DashBoard";
import NotFoundPage from "../Pages/NotFoundPage";
import EditIntern from "../Pages/EditPage/EditIntern";
import RequAuth from "../Component/ReqAuth/RequAuth";
function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route
        path="/internships"
        element={
          // <ChakraProvider>
            <InternShips />
          // </ChakraProvider>
        }
      />
      <Route
        path="/jobs"
        element={
          // <ChakraProvider>
            <JobsPage />
          // </ChakraProvider>
        }
      />
      <Route
        path="/SearchResult"
        element={
          // <ChakraProvider>
            <SearchPage />
          // </ChakraProvider>
        }
      />
      <Route
        path="/Admin/addintern"
        element={
          // <ChakraProvider>
            <AddProduct />
          // </ChakraProvider>
        }
      />
      <Route
        path="/Admin/inerndatas"
        element={
          // <ChakraProvider>
            <AvilableInter />
          // </ChakraProvider>
        }
      />
      <Route
        path="/Admin/editintern/:id"
        element={
          // <ChakraProvider>
            <EditIntern />
          // </ChakraProvider>
        }
      />
      <Route path="/Admin/dashboard" element={<AdminDashBoard />} />
      <Route path="/signup" element={<SignIngPage />} />
      <Route path="/step2" element={<Step2 />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPages />} />
      <Route path="/viewandaplly/:id" element={<ViewAndAplly />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route
        path="/dashboard"
        element={
          <RequAuth>
            <DashBoard />
          </RequAuth>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AllRouter;
