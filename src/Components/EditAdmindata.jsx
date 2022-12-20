import React,{ useEffect, useRef, useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading, Text, useColorModeValue, Container, Image, SimpleGrid, VStack, HStack,} from '@chakra-ui/react';
import { useDispatch, useSelector,  } from 'react-redux';
import {  EDIT_DATA, EDIT_DATA_AGAIN, EDIT_DATA_COMPANY_COURSE, EDIT_DATA__STUDENT_COURSE, GET_PRODUCTS} from '../Redux/App/action';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

export const EditCartData =()=> {
  const Priviousdata = "Privious data will Remain same if Seasonfild gonna be Empty."
    const[name,setname]=useState("");
    const[desc,setDesc]=useState("");
    const [image, setImage]= useState("")
    const [newPrice, setnewPrice]= useState("")
    const [oldPrice, setoldPrice]= useState("")
    const[previousdata,setPreviousData]=useState({});
    const {id} =useParams();
    // const [viewPrevData, setviewPrevData]= useState(false)
    // const [viewCruntData, setviewCruntData]= useState(false)

    const PRODUCTS= useSelector((state)=> state.AppReducer.company)
// const handelviewPrevData=()=>{
//   setviewPrevData(true);
// }
// const handelviewCruntData=()=>{
//   setviewCruntData(false);
// }
// const handelHidePrevData=()=>{
//   setviewPrevData(true);
// }
// const handelHideCruntData=()=>{
//   setviewCruntData(false);
// }
const dispatch = useDispatch();
const formclear =()=>{
navigate("/admin")
}

 const navigate =useNavigate();
 const handelUpdate =()=>{
      const payload={
      }
      if(name !== ""){
        payload.name = name 
     }
     if(desc
      !== ""){
       payload.description = desc
     }
     if(image !== ""){
       payload.image = image
    }
    if(newPrice !== ""){
      payload.season =  newPrice
    }
    if(oldPrice !== ""){
      payload.season =  oldPrice
    }
      dispatch(EDIT_DATA_COMPANY_COURSE(id,payload))
      .then(()=>{
      });
 
      dispatch(EDIT_DATA__STUDENT_COURSE(id,payload))
      .then(()=>{

      });
      navigate("/admin")
   
    }
    useEffect(()=>{
      if(id){
          const previousId = PRODUCTS.find(PRODUCTS=> PRODUCTS.id === Number(id))
            setPreviousData(previousId)
          
      }},[id])
console.log(previousdata,"dataP")
  return (
    <SimpleGrid  mt={20} columns={[1,3,3]}>

<HStack  justify={"center"} align={"center"}>
  <VStack>
  <Text  color={"red.500"} as={"b"} textAlign={"center"} fontSize={"2xl"} zIndex={5}>Privous Data</Text>
  <>
   
        <VStack  bg={"whiteAlpha.800"} h={450} color={"blackAlpha.900"} px={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
                    <>
                          <Image borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"} src={previousdata.image} alt={previousdata.name}/>
                          <VStack>
                          <FormControl > <FormLabel color={"black"} as="b" >New Title</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                              <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.name}</Text></Box></FormControl>
                              <VStack>
                          <FormControl> <FormLabel color={"black"} as="b">New Description</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflow={"auto"}>
                              <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"} > {previousdata.desc}</Text></Box></FormControl>
                              <Text color={"red.500"} as={"i"} fontSize={"2xs"}>Scroll down to read Description</Text>
                            </VStack>
                            <FormControl> <FormLabel color={"black"} as="b">old Price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.oldPrice}</Text></Box></FormControl>
                         <FormControl> <FormLabel color={"black"} as="b">onewPrice</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.newPrice}</Text></Box></FormControl>
                          </VStack>
                    </>
                        </VStack>
  
    
  </>
                        </VStack> 
                        </HStack>



<HStack  justify={"center"} align={"center"}>
  <VStack>
<Text  color={"blue.500"} as={"b"} textAlign={"center"} fontSize={"2xl"} zIndex={5}>New Data</Text>
<VStack  bg={"whiteAlpha.800"} h={450} color={"blackAlpha.900"} px={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
              <>
                    <Image  borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"}  src={image} alt={name}/>
                    <VStack>
                    <FormControl > <FormLabel color={"black"} as="b" >New Title</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {name?`${name}`:`${Priviousdata}`}</Text></Box></FormControl>
                        <VStack>
                     <FormControl> <FormLabel color={"black"} as="b">New Description</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflowX={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {desc?`${desc}`:`${Priviousdata}`}</Text></Box></FormControl>
                     {desc===""?"":  <Text  mt={-20} p={0} as={"b"} textAlign={"center"} color={"red.500"} fontSize={"2xs"}>Scroll Down</Text>}
                       </VStack>
                       <FormControl> <FormLabel color={"black"} as="b">Old price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {oldPrice?`${oldPrice}`:`${Priviousdata}`}</Text></Box></FormControl>
                         <FormControl> <FormLabel color={"black"} as="b">New price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {newPrice?`${newPrice}`:`${Priviousdata}`}</Text></Box></FormControl>
                    </VStack>
              </>
                  </VStack>
                  </VStack>
                  </HStack>

    <Stack justifyContent={"center"} alignItems={"center"} spacing={4} >
    <Container p={0} m={0} border={0}>
    <Flex 
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      p={0} m={0}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} >
        <Stack align={'center'}>
          <Heading color={"teal.400"} fontSize={'2xl'} textAlign={'center'}>
            Edit here
          </Heading>
          <Text color={"teal.400"} fontSize={'lg'} >
          Edit single & Multiple item here
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack >
          <form>
            <FormControl id="Title" >
                  <FormLabel>Title</FormLabel>
                  <Input type="text" value={name} onChange={(e)=>setname(e.target.value)}  />
                </FormControl>
            <FormControl id="Image" >
              <FormLabel>Image</FormLabel>
              <Input type="Text" value={image} onChange={(e)=>Image(e.target.value)}  />
            </FormControl>
            <FormControl id="Description" >
                  <FormLabel>Description</FormLabel>
                  <Input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}   />
                </FormControl>
            <FormControl id="Time" >
              <FormLabel>Old Price</FormLabel>
              <Input type="number" value={oldPrice} onChange={(e)=>setoldPrice(e.target.value)} />
            </FormControl>   
            <FormControl id="Time" >
              <FormLabel>new Price</FormLabel>
              <Input type="number" value={newPrice} onChange={(e)=>setoldPrice(e.target.value)} />
            </FormControl> 
            <Stack pt={5} spacing={6} direction={['column', 'row']}>
          <Box><Button leftIcon={<IoMdArrowRoundBack/>}
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
           }}c onClick={formclear}>
            Go Back
          </Button></Box>
          <Button 
          rightIcon={<MdOutlineBookmarkAdded/>}
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            type="submit"  onClick={handelUpdate }  >
            Submit
          </Button>
        </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Container>
    </Stack>
    </SimpleGrid>
  );
}