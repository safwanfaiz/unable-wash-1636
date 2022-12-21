import { Box,  Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../Components/Login'

const LoginData =[
    {   "id":1,
        "key_id":"student-ES-1",
        "description":"If you are a company looking to hire interns, please login as a company by clicking ",
        "des_link":"/company",
        "create_account":"/student",
    },
    {
        "id":2,
        "key_id":"company-ES-1",
        "description":"If you are a student looking for internships, please login as a student by clicking ",
        "des_link":"/student",
        "create_account":"/company",
    }
]

const LoginPage = () => {
  
  return (
    <Box w={"100%"} mt={50} h={896}bg={useColorModeValue("#e7e7e7","red")}>
        
        <Stack textAlign={"center"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Tabs size={"lg"}  isLazy>
        <Stack  textAlign={"center"} alignItems={"center"} justifyContent={"space-evenly"}  >
            <TabList bg={"white"} px={[null,6,6]} pt={2}mt={10} boxShadow='dark-md'  borderTopRadius={7}>
                <Tab fontWeight={"semibold"} w={230}><Link to={"/login/student"}>STUDENT</Link></Tab>
                <Tab fontWeight={"semibold"} w={230}><Link to={"/login/company"}>COMPANY</Link></Tab>
            </TabList>
            </Stack>
            <TabPanels   >
                {LoginData.map((data)=>
                    <TabPanel key={data.id && data.key_id} p={0} m={0} >
                        <Login key_id={data.key_id} description={data.description} des_link={data.des_link} create_account={data.create_account}/>
                    </TabPanel>
                )}
            </TabPanels>
        </Tabs>
        </Stack>
    </Box>
  )
}

export default LoginPage
