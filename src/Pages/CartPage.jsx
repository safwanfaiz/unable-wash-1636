import React, { useEffect, useState } from 'react'
import{CartCard} from "../Components/CartCard"
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_DATA, REMOVE_ALL_DATA_FROM_CART } from '../Redux/App/action';
import { Box, Button, Container, Divider, HStack, Heading, Input, LinkBox, LinkOverlay, Spacer, Stack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BiArrowBack } from 'react-icons/bi';
import { Payments } from '../Components/Payments';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const[offer,setOffer]= useState("");
  const[isvisible,setIsvisible]=useState(false)
  const[avilabity,setavilabity]= useState("");
  const[totalDiscount,settotalDiscount]= useState("");
    const handelOfferInput=(e)=>{
      setOffer(e.target.value)
    }
    const CARTDATA = useSelector((state) => state.AppReducer.cart);
    useEffect(() => {
     if(CARTDATA.length===0){
      dispatch(GET_CART_DATA())
     }}, []);
    let  TotalPrice =CARTDATA.reduce((total, item)=>total+Number(item.newPrice),0)

    const HandelCheckout=(CARTDATA)=>{
      dispatch(REMOVE_ALL_DATA_FROM_CART(CARTDATA))
      navigate("/")
    }
    const handelOffercheck =()=>{
      if(offer=== "EXSHALA-25"){
        setavilabity(Number(TotalPrice) - Number(TotalPrice*25/100)+ Number(TotalPrice*18/100));
        settotalDiscount(Number(TotalPrice*25/100))
        setIsvisible(true)
        toast.success("25% offer available coupon code EXSHALA-25 used")
      }
      else if(offer=== "EXSHALA-15"){
        setavilabity(Number(TotalPrice) - Number(TotalPrice*15/100) + Number(TotalPrice*18/100));
        settotalDiscount(Number(TotalPrice*15/100))
        setIsvisible(true)
        toast.success("15% offer available coupon code EXSHALA-15 used")
      }
      else if(offer === "") {
        setavilabity(Math.ceil(TotalPrice));
        setIsvisible(false)
        toast.warning("Empty Coupon Code Used")
      }
      else {
        setavilabity(TotalPrice);
        setIsvisible(Math.ceil(TotalPrice))
        toast.warning("Wrong coupon code used" `Invalid coupon code ${offer} `)
      }
    }
    let  datetime =  new Date().toLocaleString();
  return ( avilabity,
    <>
        {
          CARTDATA.length === 0 ?
         <Stack justify={"center"} align={"center"} mt={65} w={"100%"} py={50} >
            <VStack>
            <LinkBox as='article' maxW='2XL' shadow={"R"} p='5' borderWidth='1px' boxShadow='dark-lg'  rounded='md' bg='white'>
            <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
           <Text textAlign={"center"} as={"abbr"}>{datetime}</Text>
            </Box>
            <Heading size='md' my='2'>
              <LinkOverlay  href='/course'/>
              <Text textAlign={"center"}>YOUR CART IS EMPTY</Text>
            </Heading>
            <HStack justify={"center"} align={"center"}>
                <Box><BiArrowBack/></Box>
                <Text  mb="3">Continue Shoping</Text>
              </HStack>
            <Box as='a' color='red.500' href='/course' fontWeight='bold'>
            <Text textAlign={"center"}>We have Cruently Running Existing offer you</Text>
            </Box>
          </LinkBox>
            </VStack>
           </Stack>
          :
           <>
            <Box mt={65} w={"100%"}  bg={"red.500"}>
           <VStack justify={"center"} align={"center"} py={1}>
            <Text color={"whiteAlpha.900"} as={"b"}  align={"center"}> Hurrry !!! Coupon  Available</Text>
            <Text color={"whiteAlpha.900"} as={"b"}   align={"center"}> Coupons are EXSHALA-25 for 25% Discount , EXSHALA-15% for 15 Discount</Text>
            </VStack>
          </Box>
          <Container mt={50}  minW={["full","fit-content",900]} p={7} boxShadow='base'   borderRadius={7}>
              <Stack p={1}  direction={{ base: 'column', md: 'row' }}>
              <Text  fontSize='2xl' color={"#3C4858"}  as='samp'>Cart</Text>
                  <Stack pr={7} flex={5} h={[150,375,375]} overflow={"auto"}>
                    {CARTDATA.length>=0 && CARTDATA.map((item)=>
                  <CartCard key={item.id} CData={item} />
                  )
                }
              </Stack>
          <Divider orientation='vertical'w={"1px"}  borderColor={"blackAlpha.900"} />
            </Stack>
            <Stack pl={[1,0,0]} flex={[0,2,2]} h={190} justify={"initial"} align={"center"} >
                <Stack>
                <VStack flex={2}>
                <Tooltip hasArrow label="Amount = cart item's price Total" bg='red.500' placement='left-end' >
                        <HStack  mb={-2} pb={0} >
                            <Text >Amount</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice}`}</Text>
                          
                        </HStack>
                        </Tooltip>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                    {isvisible ? <VStack flex={2}>
                    <Tooltip hasArrow label='Discount = Amount * Discount Percentage' bg='red.500' placement='left-end' >
                    <HStack> 
                    <Text  flex={3} color={"red.500"} as={"b"}>Discount : </Text>
                    <Spacer w={120}/>
                    <Text flex={1} color={"red.500"} as={"b"}>{`-${totalDiscount}`}</Text>
                  </HStack>
                  </Tooltip>
                    <Divider w={"100%"} borderColor={"red.500"} />
                    </VStack>:""}
                    <VStack  flex={2}>
                    <Tooltip hasArrow label="CGST TAX = Amount * Percentage of current CGST" bg='red.500' placement='left-end' >
                        <HStack  mb={-2} pb={0} >
                            <Text >CGST 9%</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice*9/100}`}</Text>
                        </HStack>
                        </Tooltip>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                    <VStack  flex={2}>
                    <Tooltip hasArrow label="SGST TAX = Amount * Percentage of current SGST" bg='red.500' placement='left-end' >
                        <HStack  mb={-2} pb={0} >
                            <Text >SGST 9%</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice *9/100}`}</Text>
                        </HStack>
                        </Tooltip>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                </Stack>
                {isvisible ? <VStack flex={4}>

                  <Tooltip hasArrow label='Subtotal = Amount - Discount + 2(Amount * 9 /100)' bg='red.500' placement='left-end'>
                    <HStack>
                    <Text  flex={3} color={"blackAlpha.900"} as={"b"}>SubTotal: </Text>
                    <Spacer w={120}/>
                   <Text flex={1} color={"blackAlpha.900"} as={"b"}>{TotalPrice+(TotalPrice*18/100)}</Text>
                  </HStack>
                  </Tooltip>
                    <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    <Tooltip hasArrow label='Total = Subtotal  - Discount' bg='red.500' placement='left-end' >
                  <HStack>
                     <Text  flex={3} color={"blackAlpha.900"} as={"b"}>Total: </Text>
                    <Spacer w={120}/>
                    <Text flex={1} color={"blackAlpha.900"} as={"b"}>{Math.ceil(Number(avilabity))}</Text>
                  </HStack>
                  </Tooltip>
                </VStack>
                :
                <Tooltip hasArrow label='Total = Amount + CGST + SGST - Discount' bg='red.500' placement='left-end' >
                <HStack  py={15} >
                <Text  flex={3} color={"blackAlpha.900"} as={"b"}>Total</Text>
                <Spacer w={120}/>
                <Text flex={1} color={"blackAlpha.900"} as={"b"}>{Math.ceil(Number(TotalPrice)+(TotalPrice*18/100))}</Text>
            </HStack>
            </Tooltip>}

            </Stack>

       
      </Container>
      <Stack pl={7} mb={50} justify={"center"} align={"center"} >
      <HStack py={5}  w={"60%"}>
                        <Input onChange={handelOfferInput} colorScheme={"red"} variant='flushed'  type={"text"} placeholder="Coupon code"
                        fontWeight={"semibold"} focusBorderColor="#E53E3E" />
                    <Button py={[null,1,1]} px={[null,5,5]} onClick={handelOffercheck} colorScheme={"red"}>Go</Button>
                </HStack>
                <Button py={[null,5,5]}   colorScheme={"red"} onClick={()=>HandelCheckout(CARTDATA)} >{isvisible?<Payments price={Number(avilabity)} />:<Payments  price={Math.ceil(Number(TotalPrice)+(TotalPrice*18/100))}/>}</Button>
                <HStack>
                    <Text textAlign={"center"} fontSize={"sm"} as="b" color={"#FFB326"}>{`EMI Strating at ${Math.ceil(TotalPrice/12)} Per month`}
                    </Text><HiOutlineQuestionMarkCircle color={"red"}/>
                </HStack>
                </Stack>
          </>

        }
    </>
  )
}

export default CartPage
