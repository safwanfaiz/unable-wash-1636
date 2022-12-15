import React from 'react'
import {
  Flex, Box,FormControl,FormLabel,Input,InputGroup,InputRightElement,Stack,Button,Link,Heading,Text,useColorModeValue,Center, SimpleGrid, VStack, HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { SiLinkedin } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
// import { Link } from 'react-router-dom';

export const SignUpCom = () => {
  const [showPassword, setShowPassword] = useState(false);
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
       <Center m={0}P={0}> <Box w={"80%"} m={1} border={"2px dashed"} borderColor='red.300' borderRadius={3}>
        <Text p={1} w={"fit-content"} textAlign="start" fontSize={'14PX'} bg={"red.100"} color={'#3C4858'}>
        If you are a company looking to hire interns, please login as a company by clicking . <Link  color={'blue.400'}>Here.</Link>
        </Text>
        </Box>
        </Center>
        <Stack p={4}>
        <Button mb={[2,4,4]} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
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
        <FormControl m={0} id="name" isRequired>
            <FormLabel>Full name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} />
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
            <Button colorScheme='red' variant='outline'>LOGIN</Button>
          </Stack>
          </FormControl>
          <Box flex={1}><Link><Text color={"blue.600"}>Forgotten Password?</Text></Link></Box>
          <HStack align={"center"} justify={"center"} >
            <Box><Text>Don't have an account?</Text></Box>
            <Box>  <Text color={"blue.600"}><Link>Create Account</Link></Text></Box>     
          </HStack>
          </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}


