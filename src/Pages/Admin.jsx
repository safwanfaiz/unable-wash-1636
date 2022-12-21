
import {  Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AdminAddcard } from '../Components/AdminAddcard'
import AdmindataManage from '../Components/AdmindataManage'
import {  GET_PRODUCTS_COMPANY_ADMIN } from '../Redux/App/action'

export const Admin = () => {
  const PRODUCTS= useSelector((state)=> state.AppReducer.company)
  const dispatch =useDispatch();
  useEffect(()=>{
    if(PRODUCTS.length>=0){
        dispatch(GET_PRODUCTS_COMPANY_ADMIN())
    }
},[])
console.log(PRODUCTS,"prod")
  return (
    <>
      <Heading   mt={20} fontSize={'4xl'} textAlign={'center'}>Admin's panel</Heading>
      <Heading mb={3}  fontSize={'2xl'} textAlign={'center'}>Manage your Content</Heading>
      <SimpleGrid columns={[1,2,2]}   alignItems={"center"} justifyContent={"space-evenly"} backgroundImage={
          'url(https://img.freepik.com/premium-photo/abstract-white-flower-close-up-full-screen-as-background_476363-1084.jpg?w=2000)'
        } width="full" height={"full"} >
          <AdminAddcard/>
          <AdmindataManage/>
      </SimpleGrid>
    </>
  )
}

