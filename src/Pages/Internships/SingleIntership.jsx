import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, Image, Spinner, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteInternshipsData, getInternshipsData } from '../../Redux/Interships/action'
import {MdLocationPin} from "react-icons/md"

const SingleIntership = () => {
    const {id}=useParams()
    const {internData,isLoading}=useSelector(store=>store.InternshipReducer)
    const dispatch=useDispatch()
    const [current,setCurrent]=useState({})
  
    
   const month = [ "Jan", "Feb" ,"Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    useEffect(()=>
    {
      if(internData.length===0)
      {
       dispatch(getInternshipsData(20))
       
      }
    },[dispatch,internData.length])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const nav=useNavigate()
    const handleDelete=()=>
    {
     
      console.log(id,"id")
      dispatch(deleteInternshipsData(+id))
      nav("/internships")
    }


    useEffect(()=>
    {
        if(id)
        { 
            let data=internData.find(ele=>ele.id===+id)
            data && setCurrent(data)
            console.log(data,"g")
        } 
    },[id,internData])

    console.log(internData)

    if(isLoading)
    {
      return  <Spinner thickness='4px'  speed='0.65s' emptyColor='gray.200'  color='blue.500'  size='xl'/>
    }


  return (
    <>
       <Flex w={{lg:"90%"}} margin="auto" gap={"20px"} p={"10px"} mt="70px" mb="50px">
          <Box display={["none","none","block","block"]} width="20%">
            <Image src='https://assets.interntheory.com/creative/Internship_left_course_add_02.png'/>
          </Box>

          <Box boxShadow='base' p='6' rounded='md' bg='white' width={["95%","80%"]} margin="auto">
            <Flex gap={"20px"} padding={"10px"} borderBottom="2px dashed rgb(224, 224, 224)">
               <Box>
                <Image src={current.clogo} w="90px" h="90px"/>
               </Box>

               <Box>
                <Text color={"#3C4858"} fontSize="20px" fontWeight={400}>{current.jobName} </Text>
                <Text fontSize={"0.875rem"} color={"#3C4858"}>{current.cname}</Text>
                <Text fontSize={"0.875rem"} color="rgba(0, 0, 0, 0.54)">{current.interType}</Text>
                <Text fontSize={"0.875rem"} color={"#3C4858"}><span style={{fontSize:"0.875rem",color:"rgba(0, 0, 0, 0.54)"}} >Internship Category: </span> 
                <span style={{color:"rgba(0, 0, 0, 0.54)",fontWeight:"bold"}}    >{current.interCategory}</span> </Text>
               </Box>

            </Flex>

          <Box mt={"10px"}>
            <Text fontSize={"0.875rem"} color={"#3C4858"}>Openings: <span  style={{fontWeight:"bold",color:"#3C4858"}} >{current.openings}</span></Text>

            <Text fontSize={"0.875rem"} color={"#3C4858"}>Duration: <span  style={{fontWeight:"bold",color:"#3C4858"}} >{current.duration}</span></Text>

            <Text fontSize={"0.875rem"} color={"#3C4858"}>Start Date: <span  style={{fontWeight:"bold",color:"#3C4858"}} >{current.sdate && current.sdate[2]}th {current.sdate && month[(+current.sdate[1])-1] } {current.sdate && current.sdate[0]}
            </span></Text> 

            <Text fontSize={"0.875rem"} color={"#3C4858"}>Application Deadline: <span  style={{fontWeight:"bold",color:"#3C4858"}} >{current.edate && current.edate[2]}th {current.edate && month[(+current.edate[1])-1] } {current.edate && current.edate[0]} </span></Text> 

            <Text fontSize={"0.875rem"} color={"#3C4858"}>Stipend: <span  style={{fontWeight:"bold",color:"#3C4858"}} >{current.stipend}</span></Text>
          </Box>

            <Box mt={"10px"} marginTop="20px">
               <Text fontWeight="bold" color="#3C4858" fontSize={"0.875rem"} mb="20px">Internship Description:</Text>
                <Box>{current.description && current.description.map((ele)=><Text fontSize={"0.875rem"}>{ele}</Text>)} </Box>
            </Box>

            <Box mt={"10px"}>
               <Text fontWeight="bold" color="#3C4858" fontSize={"0.875rem"} mb="5px">Perks:</Text>
               <Box>{current.perks} </Box>
            </Box>


            <Box mt={"10px"} borderBottom="2px dashed rgb(224, 224, 224)" pb={"20px"}>
               <Text fontWeight="bold" color="#3C4858" fontSize={"0.875rem"}  mb="5px">Prefered Skills:</Text>
               <Flex gap={"10px"}>{current.skills && current.skills.map(ele=><Text borderRadius={"16px"} bg="#e0e0e0" padding="4px 10px">{ele}</Text>)} </Flex>
            </Box>
            
            

            <Box mt={"10px"}>
               <Text fontWeight="bold" color="#3C4858" fontSize={"0.875rem"}  mb="5px">Company Description:</Text>
               <Box>{current.cDiscription} </Box>
            </Box>

            <Box mt={"10px"}>
               <Text fontWeight="bold" color="#3C4858" fontSize={"0.875rem"}  mb="5px">Location:</Text>
               <Box display={"flex"} alignItems="center" gap={"5px"}><MdLocationPin/>{current.location} </Box>
            </Box>


            
            <Flex mt={"10px"} fontSize="0.875rem" fontWeight={"500"} p="6px 16px" justifyContent={"end"}>




     <NavLink to={`/internships/edit/${+id}`}> <Button mr={"5px"} padding="0px 20px">Edit Post</Button>    </NavLink>


      <Button colorScheme='red' onClick={onOpen}>
        Delete Post
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
               <Text onClick={handleDelete}>Delete</Text> 
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>



      



               <NavLink to="/internships"><Button bg={"none"} _hover={{bg:"#becedc"}} color="#087CDD">BACK TO INTERNSHIPS</Button></NavLink>
               <Button bg={"#DF1E2E"} color="white" borderRadius="5px" _hover={{bg:"#ab1925"}}>APPLY</Button>
            </Flex>
        


            


          </Box>


       </Flex>
    
    </>
  )

}

export default SingleIntership