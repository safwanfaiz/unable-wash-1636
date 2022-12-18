import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { postJobsData } from '../../Redux/Job/action'


const initalValue={
  jobName:"",
  cname:"",
  clogo:"",
  jobCategory:"",
  openings:"",
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

const AddJob = () => {

  const [newJob,setnewJob]=useState(initalValue)

  
  const datePickerId = new Date().toISOString().split("T")[0];
  const dispatch=useDispatch()
 
 const nav=useNavigate()
  const handleJobPost=()=>
  {
     if(newJob.cDiscription!="" || newJob.clogo!="" || newJob.cname!="" || newJob.description!="" || newJob.duration!="" || newJob.edate!="" || newJob.jobCategory!="" || newJob.jobName!="" || newJob.location!="" || newJob.openings!="" || newJob.perks)
     {
       
        dispatch(postJobsData(newJob)).then(()=>nav("/jobs"))
        
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
     newJob.skills=data.split("\n");
  }

  const handleDiscription=(data)=>
  {
    setDescription(data)
    newJob.description=data.split("\n")
    
  }

  const handleSdate=(data)=>
  {
    setSdate(data)
    newJob.sdate=data.split("-")
    console.log(newJob.sdate)
  }

  const handleEdate=(data)=>
  {
    setEdate(data)
    newJob.edate=data.split("-")
  }

  
  return (
    <>
      <Box margin={'auto'} w={{sm:"95%",md:"80%",lg:"70%",xl:"50%"}} boxShadow={'2xl'} padding={"30px"} rounded={'xl'} mt="70px" mb="50px">
          
          <Heading textAlign={"center"} padding="10px 0px 30px 0px">Post Job</Heading>
           <FormControl >
             
           <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>
            <Box w={{sm:"100%",md:"50%"}}>
             <FormLabel>Job Title</FormLabel>
             <Input type={"text"} value={newJob.jobName} onChange={(e)=>setnewJob({...newJob,jobName:e.target.value})} marginBottom={"10px"} />
            </Box>

            <Box w={{sm:"100%",md:"50%"}}>
             <FormLabel>Company Name</FormLabel>
             <Input type={"text"} value={newJob.cname} onChange={(e)=>setnewJob({...newJob,cname:e.target.value})}  marginBottom={"10px"}/>
            </Box>
            </Flex>
             
             <FormLabel>Company Logo URL</FormLabel>
             <Input type={"text"} value={newJob.clogo} onChange={(e)=>setnewJob({...newJob,clogo:e.target.value})}  marginBottom={"10px"}/>
           

             <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>
             <Box w={{sm:"100%",md:"50%"}}>
               <FormLabel>Openings</FormLabel>
               <Input type={"number"} value={newJob.openings} onChange={(e)=>setnewJob({...newJob,openings:e.target.value})}  marginBottom={"10px"}/>
              </Box>
              <Box w={{sm:"100%",md:"50%"}}>
              <FormLabel>Job Category</FormLabel>
              <Select value={newJob.jobCategory} onChange={(e)=>setnewJob({...newJob,jobCategory:e.target.value})}  marginBottom={"10px"}>
               
               <option>Select Job Category</option>
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
             <Input type={"text"} value={newJob.stipend} onChange={(e)=>setnewJob({...newJob,stipend:e.target.value})}  marginBottom={"10px"}/>

             
             <FormLabel>Job Description</FormLabel>
             <Textarea value={discription} onChange={(e)=>handleDiscription(e.target.value)} />
           

             <FormLabel>Perks</FormLabel>
             <Input type={"text"} value={newJob.perks} onChange={(e)=>setnewJob({...newJob,perks:e.target.value})}  marginBottom={"10px"}/>

             
             <FormLabel>Skills</FormLabel>
             <Textarea value={skills} onChange={(e)=>handleSkills(e.target.value)} />

             <FormLabel>Company Description</FormLabel>
             <Textarea value={newJob.cDiscription} onChange={(e)=>setnewJob({...newJob,cDiscription:e.target.value})} />
             
             <FormLabel>Job Locations</FormLabel>
             <Input type={"text"} value={newJob.jobLocations} onChange={(e)=>setnewJob({...newJob,jobLocations:e.target.value})}  marginBottom={"10px"}/>

             <FormLabel>Location</FormLabel>
             <Input type={"text"} value={newJob.location} onChange={(e)=>setnewJob({...newJob,location:e.target.value})}  marginBottom={"10px"}/>
             

           
           

             <Center>   
            <NavLink to="/jobs"><Button bg={"none"} _hover="none" color={"#087CDD"}>Return Back To Jobs</Button></NavLink>
            <Button w={"150px"} onClick={handleJobPost} bg="#DF1E2E" _hover="#a2111d" color="white">Post</Button>  </Center> 
           
  
           </FormControl>

      </Box>
    </>
  )
}

export default AddJob






