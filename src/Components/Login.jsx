import React from 'react'
import {
  Flex, Box,FormControl,FormLabel,Input,InputGroup,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Center, HStack, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { SiLinkedin } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {  UserAuth } from '../Utils/firebase-config';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { GET_AUTH_SUCESS_COMPANY, GET_AUTH_SUCESS_STUDENT } from '../Redux/Auth/actionTypes';
export const Login = ({key_id,description,des_link,create_account}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSigninLoading, setisSigninLoading] = useState(false);
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const [state, setState] = useState({
  email: "",
  password: "",
  })
  const {email, password,} = state;
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
  signInWithPopup(UserAuth, provider)
  .then((result) => {
  
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;
    const user = result.user;
    toast.success("Login Sucessfull")
    navigate("/")
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    toast.error("Login Failed")
    toast.error(errorCode,errorMessage)
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })};
const handleSubmit = (e) => {
    e.preventDefault();
    setisSigninLoading(true)
signInWithEmailAndPassword(UserAuth, email, password)
  .then((userCredential) => {
    // Signed in 
    const Loguser = userCredential.user;
    console.log(Loguser)
    setisSigninLoading(false);
    toast.success("Login Sucessfull")
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorCode,errorMessage)
    setisSigninLoading(false);
  });
    setState({email: "",
    password: "",})
  };
  const handleChange = (e) => {
    let {name,value} =e.target ;
    setState({...state,[name]:value})
  };
  return (
    <Flex justify={"center"} align={"center"} mt={0} boxShadow='dark-md'   borderBottomRightRadius={7} 
    minH={['50vh']}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack  mx={'auto'} maxW={'lg'}>
      <Box p={5}
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
      px={8} >
        <Heading fontSize={'24px'} fontWeight mt={5} pl={7} textAlign={"start"}>
         Login
        </Heading>
       <Center m={0}p={0}> <Box  w={"85%"} m={1} border={"2px dashed"} borderColor='red.300' borderRadius={3}>
        <Text p={1} w={"fit-content"} textAlign="start" fontSize={'14px'} bg={"red.100"} color={'#3C4858'}>
        {description}<NavLink style={{color: '#138ae3'}} to={des_link}>Here</NavLink>
        </Text>
        </Box>
        </Center>
        <Stack p={4}>
        <Button onClick={ handleGoogleSignIn} mb={[2,4,4]} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>SIGNIN WITH  GOOGLE</Text>
          </Center>
        </Button>
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>SIGNIN WITH LINKEDIN</Text>
          </Center>
        </Button>
        <Text m={0} p={0}  fontWeight={"semibold"} color="#999999" textAlign={"center"}>OR</Text>
        <FormControl m={0} p={0} >
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input  type="email" onChange={handleChange} name="email" value={email}  />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} onChange={handleChange} name="password" value={password}  />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={8}>
            <Button colorScheme='red' color={"red.500"} variant='outline'  onClick={handleSubmit}>LOGIN</Button>
          </Stack>
          </FormControl>
          <Box flex={1}><Link><Text color={"#138ae3"}>Forgotten Password?</Text></Link></Box>
          <HStack align={"center"} justify={"center"} >
            <Box><Text>Don't have an account?</Text></Box>
            <Box>  <Text color={"#138ae3"}><Link to={create_account}>Create Account</Link></Text></Box>     
          </HStack>
          </Stack>
      </Box>
    </Stack>
  </Flex>

  )
}
