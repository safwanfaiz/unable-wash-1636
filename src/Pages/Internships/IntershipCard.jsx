import { Box, Image, Text,Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsShareFill,BsLinkedin} from "react-icons/bs"
import {FaFacebookSquare,FaTwitterSquare,FaWhatsappSquare} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import { useState } from 'react'

const IntershipCard = ({intern}) => {
   
   const [social,setSocial]=useState("none")
   const handleSocial=()=>
   {
      social=="none"?setSocial("block"):setSocial("none")
   }

  return (
    <>
       <Flex padding={"20px"} borderBottom="2px dashed rgb(224, 224, 224)" justifyContent={"space-between"} flexDirection={["column","column","row","row"]}>
          <Flex gap={"20px"}>
               <Box>
                <Image src={intern.clogo} w="90px" h="90px"/>
               </Box>

               <Box>
                <Text color={"#3C4858"} fontSize="20px" fontWeight={400}>{intern.jobName} </Text>
                <Text fontSize={"0.875rem"} color={"#3C4858"}>{intern.cname}</Text>
                <Text fontSize={"0.875rem"} color="rgba(0, 0, 0, 0.54)">{intern.interType}</Text>
                <Text fontSize={"0.875rem"} color="rgba(0, 0, 0, 0.54)">{intern.interCategory}</Text>
                <Text fontSize={"0.875rem"} color="rgba(0, 0, 0, 0.54)">{intern.jobLocations}</Text>
                <Text fontSize={"0.875rem"} color={"#3C4858"}><span style={{fontSize:"0.875rem",color:"rgba(0, 0, 0, 0.54)"}}    >Stipend:</span> 
                
                <span style={{color:"rgba(0, 0, 0, 0.54)",fontWeight:"bold"}}    >{intern.stipend} </span> </Text>
               </Box>

          </Flex>


            <Box  textAlign={["left","left","right","right"]}>
             <Text fontSize={"0.875rem"} color={"#3C4858"} mb={["3%","3%","12%","12%"]} >4 Weeks</Text>
             <Box  mb={["3%","3%","12%","12%"]}><Button bg={social=="none"?"none":"rgba(0, 0, 0, 0.2)"} borderRadius="50%" _hover={{bg:'rgba(0, 0, 0, 0.2)'}}  onClick={handleSocial}><BsShareFill color='rgba(0, 0, 0, 0.54)'/></Button>
              <Box display={social}> <Flex gap={"5px"} > <FaFacebookSquare color='#395693' size={20}/> <FaTwitterSquare color='#00acee' size={20}/>  <SiGmail color='#EA4335' size={20}/> <BsLinkedin color='#0077b5' size={20}/> <FaWhatsappSquare  color='#4aaa4d' size={20}/> </Flex></Box>
            </Box>
              
              
             <NavLink to={`/internships/${intern.id}`} > <Text color='#087CDD' fontSize={"0.875rem"} fontWeight="500">VIEW AND APPLY</Text> </NavLink>
          </Box>
       </Flex>
    </>
  )
}

export default IntershipCard