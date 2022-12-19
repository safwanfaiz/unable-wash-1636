import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Select,Textarea } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getInternshipsData, patchInternshipsData } from '../../Redux/Interships/action'




const EditInternships = () => {
    

    const {id}=useParams()
    const {internData,isLoading,isError}=useSelector(store=>store.InternshipReducer)
    const dispatch=useDispatch()
    const [current,setCurrent]=useState({})
   
   
  
    useEffect(()=>
    {
      if(internData.length===0)
      {
       dispatch(getInternshipsData(25))
       
      }
    },[dispatch,internData.length])



    useEffect(()=>
    {
        if(id)
        { 
            let data=internData.find(ele=>ele.id===+id)
            data && setCurrent(data)
      
        } 
    },[id,internData])


 const nav=useNavigate()

  const datePickerId = new Date().toISOString().split("T")[0];

 

  const handleInterPatch=()=>
  {
     if(current.cDiscription!="" || current.clogo!="" || current.cname!="" || current.description!="" || current.duration!="" || current.edate!="" || current.interCategory!="" || current.interType!="" || current.jobName!="" || current.location!="" || current.openings!="" || current.perks)
     {
       console.log(current,"hi")
        dispatch(patchInternshipsData(current)).then(()=> nav("/internships"))
       
     }
     else
     {
       console.log("wrong");
     }
  }


  const [skills,setSkills]=useState("")
  const [discription,setDescription]=useState("")
  const [sdate,setSdate]=useState("")
  const [edate,setEdate]=useState("")

  const handleSkills=(data)=>
  {
     setSkills(data)
     current.skills=data.split("\n");
  }

  const handleDiscription=(data)=>
  {
    setDescription(data)
    current.description=data.split("\n")
    
  }

  const handleSdate=(data)=>
  {
    setSdate(data)
    current.sdate=data.split("-")
    
  }

  const handleEdate=(data)=>
  {
    setEdate(data)
    current.edate=data.split("-")
  }

  
  return (
    <>
      <Box margin={'auto'} w={{sm:"95%",md:"80%",lg:"70%",xl:"50%"}} boxShadow={'2xl'} padding={"30px"} rounded={'xl'} mt="70px" mb="50px">
          
          <Heading textAlign={"center"} padding="10px 0px 30px 0px">Edit Intership</Heading>
           <FormControl >
             
           <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>
            <Box w={{sm:"100%",md:"50%"}}>
             <FormLabel>Job Title</FormLabel>
             <Input type={"text"} value={current.jobName} onChange={(e)=>setCurrent({...current,jobName:e.target.value})} marginBottom={"10px"} />
            </Box>

            <Box w={{sm:"100%",md:"50%"}}>
             <FormLabel>Company Name</FormLabel>
             <Input type={"text"} value={current.cname} onChange={(e)=>setCurrent({...current,cname:e.target.value})}  marginBottom={"10px"}/>
            </Box>
            </Flex>
             
             <FormLabel>Company Logo URL</FormLabel>
             <Input type={"text"} value={current.clogo} onChange={(e)=>setCurrent({...current,clogo:e.target.value})}  marginBottom={"10px"}/>
           
             <Flex gap={"30px"} direction={{sm:"column",lg:"row"}}>
            
             <Select value={current.interType} onChange={(e)=>setCurrent({...current,interType:e.target.value})}  marginBottom={"10px"}>
               <option>Select Internship Type</option>
               <option value={"Full Time Internship"}>Full Time Internship</option>
               <option value={"Part Time Internship"}>Part Time Internship</option>
               <option value={"Work From Home"}>Work From Home</option>
             </Select>

            
             <Select value={current.interCategory} onChange={(e)=>setCurrent({...current,interCategory:e.target.value})}  marginBottom={"10px"}>
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
               <Input type={"number"} value={current.openings} onChange={(e)=>setCurrent({...current,openings:e.target.value})}  marginBottom={"10px"}/>
              </Box>

              <Box w={{sm:"100%",md:"50%"}}>
               <FormLabel>Duration</FormLabel>
               <Input type={"text"} value={current.duration} onChange={(e)=>setCurrent({...current,duration:e.target.value})}  marginBottom={"10px"}/>
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
             <Input type={"text"} value={current.stipend} onChange={(e)=>setCurrent({...current,stipend:e.target.value})}  marginBottom={"10px"}/>

             
             <FormLabel>Internship Description</FormLabel>
             <Textarea value={discription} onChange={(e)=>handleDiscription(e.target.value)} />
           

             <FormLabel>Perks</FormLabel>
             <Input type={"text"} value={current.perks} onChange={(e)=>setCurrent({...current,perks:e.target.value})}  marginBottom={"10px"}/>

             
             <FormLabel>Skills</FormLabel>
             <Textarea value={skills} onChange={(e)=>handleSkills(e.target.value)} />

             <FormLabel>Company Description</FormLabel>
             <Textarea value={current.cDiscription} onChange={(e)=>setCurrent({...current,cDiscription:e.target.value})} />
             
             <FormLabel>Job Locations</FormLabel>
             <Input type={"text"} value={current.jobLocations} onChange={(e)=>setCurrent({...current,jobLocations:e.target.value})}  marginBottom={"10px"}/>

             <FormLabel>Location</FormLabel>
             <Input type={"text"} value={current.location} onChange={(e)=>setCurrent({...current,location:e.target.value})}  marginBottom={"10px"}/>
             

           
              

             <Center>   
            <NavLink to="/internships"><Button bg={"none"} _hover="none" color={"#087CDD"}>Return Back To Internships</Button></NavLink>
            <Button w={"150px"} onClick={handleInterPatch} bg="#DF1E2E" _hover="#a2111d" color="white">Post</Button>  </Center> 
           
  
           </FormControl>

      </Box>
    </>
  )
}

export default EditInternships






