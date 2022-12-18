import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getInternshipsData, postInternshipsData } from '../../Redux/Interships/action'


const initalValue={
  jobName:"",
  cname:"",
  clogo:"",
  interType:"",
  interCategory:"",
  openings:"",
  duration:"",
  sdate:[],
  edate:[],
  stipend:"",
  description:[],
  perks:"",
  skills:[],
  cDiscription:"",
  location:"",
  jobLocations:""
 

}

const InternshipsPost = () => {

  const [newInter,setNewInter]=useState(initalValue)

  
  const datePickerId = new Date().toISOString().split("T")[0];
  const dispatch=useDispatch()
 
 const nav=useNavigate()
  const handleInterPost=()=>
  {
     if(newInter.cDiscription!="" || newInter.clogo!="" || newInter.cname!="" || newInter.description!="" || newInter.duration!="" || newInter.edate!="" || newInter.interCategory!="" || newInter.interType!="" || newInter.jobName!="" || newInter.location!="" || newInter.openings!="" || newInter.perks)
     {
       
        dispatch(postInternshipsData(newInter)).then(()=> nav("/internships"))
       
     }
     else
     {
       console.log("wrong")
     }
  }

  const [skills,setSkills]=useState("")
  const [discription,setDescription]=useState("")
  const [sdate,setSdate]=useState("")
  const [edate,setEdate]=useState("")

  const handleSkills=(data)=>
  {
     setSkills(data)
     newInter.skills=data.split("\n");
  }

  const handleDiscription=(data)=>
  {
    setDescription(data)
    newInter.description=data.split("\n")
    
  }

  const handleSdate=(data)=>
  {
    setSdate(data)
    newInter.sdate=data.split("-")
    console.log(newInter.sdate)
  }

  const handleEdate=(data)=>
  {
    setEdate(data)
    newInter.edate=data.split("-")
  }

  
  return (
    <>
      <Box margin={'auto'} w={{sm:"95%",md:"80%",lg:"70%",xl:"50%"}} boxShadow={'2xl'} padding={"30px"} rounded={'xl'} mt="70px" mb="50px">
          
          <Heading textAlign={"center"} padding="10px 0px 30px 0px">Post Intership</Heading>
           <FormControl >
             
           <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>
            <Box w={{sm:"100%",md:"50%"}}>
             <FormLabel>Job Title</FormLabel>
             <Input type={"text"} value={newInter.jobName} onChange={(e)=>setNewInter({...newInter,jobName:e.target.value})} marginBottom={"10px"} />
            </Box>

            <Box w={{sm:"100%",md:"50%"}}>
             <FormLabel>Company Name</FormLabel>
             <Input type={"text"} value={newInter.cname} onChange={(e)=>setNewInter({...newInter,cname:e.target.value})}  marginBottom={"10px"}/>
            </Box>
            </Flex>
             
             <FormLabel>Company Logo URL</FormLabel>
             <Input type={"text"} value={newInter.clogo} onChange={(e)=>setNewInter({...newInter,clogo:e.target.value})}  marginBottom={"10px"}/>
           
             <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>
            
             <Select value={newInter.interType} onChange={(e)=>setNewInter({...newInter,interType:e.target.value})}  marginBottom={"10px"}>
               <option>Select Internship Type</option>
               <option value={"Full Time Internship"}>Full Time Internship</option>
               <option value={"Part Time Internship"}>Part Time Internship</option>
               <option value={"Work From Home"}>Work From Home</option>
             </Select>

            
             <Select value={newInter.interCategory} onChange={(e)=>setNewInter({...newInter,interCategory:e.target.value})}  marginBottom={"10px"}>
               <option>Select Internship Category</option>
               <option value={"Digital Marketing"}>Digital Marketing</option>
               <option value={"Marketing"}>Marketing</option>
               <option value={"Education And Training"}>Education And Training</option>
               <option value={"Business Development"}>Business Development</option>
               <option value={"Advertising"}>Advertising</option>
               <option value={"Content Writing"}>Content Writing</option>
               <option value={"Customer Relationship Management"}>Customer Relationship Management</option>
               <option value={"Event Management"}>Event Management</option>
               <option value={"Finance"}>Finance</option>
               <option value={"Human Resources"}>Human Resources</option>
               <option value={"Operations"}>Operations</option>
               <option value={"Project Management"}>Project Management</option>
               <option value={"Software Development"}>Software Development</option>
               <option value={"Psychology"}>Psychology</option>
               <option value={"Advertising"}>Advertising</option>
               <option value={"Graphic Designing"}>Graphic Designing</option>


              
             </Select>
             
             </Flex>

             <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>
             <Box w={{sm:"100%",md:"50%"}}>
               <FormLabel>Openings</FormLabel>
               <Input type={"number"} value={newInter.openings} onChange={(e)=>setNewInter({...newInter,openings:e.target.value})}  marginBottom={"10px"}/>
              </Box>

              <Box w={{sm:"100%",md:"50%"}}>
               <FormLabel>Duration</FormLabel>
               <Input type={"text"} value={newInter.duration} onChange={(e)=>setNewInter({...newInter,duration:e.target.value})}  marginBottom={"10px"}/>
              </Box>
             </Flex>

             

             <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>

             <Box w={{sm:"100%",md:"50%"}}>
               <FormLabel>Start Date</FormLabel>
               <Input type="date" value={sdate} onChange={(e)=>handleSdate(e.target.value)} min={datePickerId} marginBottom={"10px"}/>
              </Box>

              <Box w={{sm:"100%",md:"50%"}}>
                <FormLabel>Application Deadline</FormLabel>
                <Input type="date" value={edate} onChange={(e)=>handleEdate(e.target.value)}  min={datePickerId} marginBottom={"10px"}/>
             </Box>

            </Flex>

 
            









             <FormLabel>Stipend</FormLabel>
             <Input type={"text"} value={newInter.stipend} onChange={(e)=>setNewInter({...newInter,stipend:e.target.value})}  marginBottom={"10px"}/>

             
             <FormLabel>Internship Description</FormLabel>
             <Textarea value={discription} onChange={(e)=>handleDiscription(e.target.value)} />
           

             <FormLabel>Perks</FormLabel>
             <Input type={"text"} value={newInter.perks} onChange={(e)=>setNewInter({...newInter,perks:e.target.value})}  marginBottom={"10px"}/>

             
             <FormLabel>Skills</FormLabel>
             <Textarea value={skills} onChange={(e)=>handleSkills(e.target.value)} />

             <FormLabel>Company Description</FormLabel>
             <Textarea value={newInter.cDiscription} onChange={(e)=>setNewInter({...newInter,cDiscription:e.target.value})} />
             
             <FormLabel>Job Locations</FormLabel>
             <Input type={"text"} value={newInter.jobLocations} onChange={(e)=>setNewInter({...newInter,jobLocations:e.target.value})}  marginBottom={"10px"}/>

             <FormLabel>Location</FormLabel>
             <Input type={"text"} value={newInter.location} onChange={(e)=>setNewInter({...newInter,location:e.target.value})}  marginBottom={"10px"}/>
             

           
         <Center>   
            <NavLink to="/internships"><Button bg={"none"} _hover="none" color={"#087CDD"}>Return Back To Internships</Button></NavLink>
            <Button w={"150px"} onClick={handleInterPost} bg="#DF1E2E" _hover="#a2111d" color="white">Post</Button>  </Center> 
           
  
           </FormControl>

      </Box>
    </>
  )
}

export default InternshipsPost






