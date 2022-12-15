import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from '../Components/SignUp'
import { HomePage } from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'

export const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login/student' element={<LoginPage/>}/>
      <Route path='/login/company' element={<LoginPage/>}/>
      <Route path='/register/student' element={<SignUp/>}/>
    </Routes>
  )
}
