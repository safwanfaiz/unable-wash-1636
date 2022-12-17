import React,{  useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading, Text, useColorModeValue, Container,} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ADD_DATA, ADD_DATA_COMPANY_COURSE, ADD_DATA_STUDENT_COURSE, ADD_DATA_TO_WATCH_PRE } from '../Redux/App/action';
import { toast } from 'react-toastify';
export const AdminAddcard =()=> {
  
const [form, setForm]= useState({
  title: "",
  image: "",
  description:"",
  season: null
})
const dispatch = useDispatch();
const formclear =()=>{
  setForm({
    ...form,
    title: "",
    image: "",
    description:"",
    season: ""
  })
  toast.success("Form is cleared")
}

const OnChangeValue =(e)=>{
  let{name:key,value}= e.target ;
setForm({
      ...form,
      [key]:value
    })
  }


const OnsubmitPress =(e)=>{
  e.preventDefault();

    dispatch(ADD_DATA_COMPANY_COURSE({...form})).then((r)=>{
    })
    dispatch(ADD_DATA_STUDENT_COURSE({...form})).then((r)=>{
    })
    setForm({
      ...form,
        title: "",
        image: "",
        description:"",
        season: ""
    })
    toast.success("Data added sucesfully")
  }


  return (
    <Container p={0} m={0} border={0}>
    <Flex 
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      p={0} m={0}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Admin Add Product
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          item will be added
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form>
            <FormControl id="Title" isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input type="text"onChange={OnChangeValue}   name="title" />
                </FormControl>
            <FormControl id="Image" isRequired>
              <FormLabel>Image</FormLabel>
              <Input type="Text" onChange={OnChangeValue} name="image"  />
            </FormControl>
            <FormControl id="Description" isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input type="text" onChange={OnChangeValue}  name="description"  />
                </FormControl>
            <FormControl id="Time" isRequired>
              <FormLabel>Seasons</FormLabel>
              <Input type="text" onChange={OnChangeValue}  name="season"/>
            </FormControl>   
            <Stack pt={5} spacing={6} direction={['column', 'row']}>
          <Box><Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
           }}c onClick={formclear}>
            Cancel
          </Button></Box>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            type="submit"  onClick={ OnsubmitPress}  >
            Add
          </Button>
        </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Container>
  );
}