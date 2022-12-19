import { Box, Button, Center, Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement, Skeleton, Spinner, Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsData } from '../../Redux/Job/action'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

import JobCard from './JobCard'

const Jobs = () => {
 
const dispatch=useDispatch()
 const {jobData,isLoading,isError}=useSelector(store=>store.JobsReducer)





  useEffect(()=>
  {
     dispatch(getJobsData())
  
  },[dispatch])

  if(isLoading)
  {
    return <Stack>
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
  }


  return (
   <Box bg="#f8f8f8" mt="70px"  mb={"50px"} >
    <Box   boxShadow={'2xl'}>
     {/* filter */}
     <Box bg={"white"} display={["none","none", "none", "block"]} >
     <Flex margin="auto"  w={"80%"} alignItems="center" gap={"5px"} >
     
     <InputGroup p={"10px"}>
      <InputRightElement children={<MdOutlineKeyboardArrowDown size={"30px"} color="#d1d1d1"/>} borderLeft="1px solid #d1d1d1" />
      <Input type={"text"} placeholder="Cities..." border={"none"} borderBottom="2px solid #d1d1d1" borderRadius={"none"}  _focusVisible="none"/>
     </InputGroup>

     <InputGroup p={"10px"}>
      <InputRightElement children={<MdOutlineKeyboardArrowDown size={"30px"} color="#d1d1d1"/>} borderLeft="1px solid #d1d1d1"/>
      <Input type={"text"} placeholder="Types..." border={"none"} borderBottom="2px solid #d1d1d1" borderRadius={"none"} _focusVisible="none" />
     </InputGroup>

     <InputGroup p={"10px"}>
      <InputRightElement children={<MdOutlineKeyboardArrowDown size={"30px"} color="#d1d1d1"/>} borderLeft="1px solid #d1d1d1"/>
      <Input type={"text"} placeholder="Preferences..." border={"none"} borderBottom="2px solid #d1d1d1" borderRadius={"none"}  _focusVisible="none"/>
     </InputGroup>

     <Box>OR</Box>

     <InputGroup>
      <InputRightElement width={"40%"} justifyItems="end" children={<Button bg={"#087CDD"} color="white" padding={"0px 40px"} fontSize="14px" h={"30px"}>SEARCH</Button>}  />
      <Input type={"text"} placeholder="Search..." border={"none"} borderBottom="2px solid #d1d1d1" borderRadius={"none"}  _focusVisible="none"/>
     </InputGroup>
     
    </Flex>
   </Box> 
   </Box>
{/* filter end*/}



      <Flex w={["95%","90%","80%"]} margin="auto" gap={"20px"}  mt="10px">

        <Box display={["none","none","block","block"]} w="20%">
            <Image src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png" alt="store-link"/>
        </Box>

        <Box w={["95%","90%","80%"]} boxShadow={'2xl'} borderRadius="5px" bg="white" p={"0px 20px"}>
            
            {
                jobData && jobData.map((data)=><JobCard key={data.id} job={data}/>)
            }
            <Center m={"20px 0px"}>
          <Button  bg="none" >End of the Result  </Button></Center>
        </Box>
        
      </Flex>
      
       
</Box> 
  )
}

export default Jobs