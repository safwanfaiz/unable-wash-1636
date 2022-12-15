import { Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>HomePage
      <Link to={"/login/student"}>Login</Link><Spacer/>
      <Link to={"/register/student"}>SignUp</Link>
    </div>
  )
}
