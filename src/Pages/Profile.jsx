import React from 'react'
import UseProfile from '../Hooks/UseProfile'
import { Box,Center,useColorModeValue,Heading,Text,Image, Stack, Button,} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const {avatar, displayName, userEmail,userPhoto, HandleLogOut} =UseProfile()
  const navigate =useNavigate();
  const handelhome =()=>{
    navigate("/")
  }
  return (
    <Center mt={90} py={12}>
      <Box role={'group'}  p={6} maxW={'530px'} w={'full'} bg={useColorModeValue('white', 'gray.800')}boxShadow={'2xl'}
        rounded={'lg'}  pos={'relative'} zIndex={1}> 
        <Box rounded={'lg'}  mt={-12} pos={'relative'} height={'430px'}_after={{
            transition: 'all .3s ease', content: '""', w: 'full', h: 'full',pos: 'absolute', top: 5, left: 0,
             backgroundImage: `url(${userPhoto})`,filter: 'blur(15px)',zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Center align={"center"} >
          <Image mt={70} rounded={'lg'}height={280} width={280} objectFit={'cover'} borderRadius={"50%"} src={userPhoto} />
          </Center>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'xl'} textTransform={'uppercase'}>
            Name : {displayName}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Email ID : {userEmail}
          </Heading>
          <Stack direction={'row'}  justify={"space-evenly"} py={5}>
            <Button flex={1} fontSize={'sm'} rounded={'full'} bg={'blue.400'} color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }} 
            
            onClick={handelhome}
            >Go to home</Button>
            <Button flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'red.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'red.500',
            }}
            _focus={{
              bg: 'red.500',
            }}
            onClick={HandleLogOut}

            >Log Out</Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default Profile
