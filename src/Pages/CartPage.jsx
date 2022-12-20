import React, { useEffect, useState } from 'react'
import{CartCard} from "../Components/CartCard"
import { useDispatch, useSelector } from 'react-redux';
import { GET_CART_DATA } from '../Redux/App/action';
import UseCart from '../Hooks/UseCart';
import { Button, Container, Divider, HStack, Input, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const [TotalPrice, setTotalPrice] =useState(0)
  const navigate=useNavigate();
    const handelOfferInput=(e)=>{
        e.preventDefault();
    }

    const CARTDATA = useSelector((state) => state.AppReducer.cart);
    useEffect(() => {
     if(CARTDATA.length===0){
      dispatch(GET_CART_DATA())
     }}, []);
    useEffect(()=>{
       CARTDATA &&CARTDATA.map((item)=>
        setTotalPrice(TotalPrice+item.newPrice)
        )
        
    },[])
    const HandelCheckout=()=>{
      alert("Purchase completed"+"\n"+`Order Id ${Date.now()}`)
      navigate("/")
    }
  return (
    <>
    <Container mt={100} mb={200} minW={["full","fit-content",900]} p={7} boxShadow='base'   borderRadius={7}>
        <Stack p={3}  direction={{ base: 'column', md: 'row' }}>
        <Text  fontSize='2xl' color={"#3C4858"}  as='samp'>Cart</Text>
            <Stack pr={7} flex={5}>
              {CARTDATA.length>=0 && CARTDATA.map((item)=>
            <CartCard key={item.id} CData={item} />
            )
          }
        </Stack>
     <Divider orientation='vertical'w={"1px"}  borderColor={"blackAlpha.900"} />
      </Stack>
      <Stack flex={[0,2,2]} pl={7} h={100} justify={"initial"} align={"center"} >
                <Stack>
                <VStack flex={2}>
                        <HStack  mb={-2} pb={0} >
                            <Text >Amount</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice}`}</Text>
                        </HStack>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                    <VStack  flex={2}>
                        <HStack  mb={-2} pb={0} >
                            <Text >CGST 9%</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice*9/100}`}</Text>
                        </HStack>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                    <VStack  flex={2}>
                        <HStack  mb={-2} pb={0} >
                            <Text >SGST 9%</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice *9/100}`}</Text>
                        </HStack>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                </Stack>
                <HStack  flex={2} >
                    <Text  flex={2} color={"blackAlpha.900"} as={"b"}>Total:</Text>
                    <Spacer w={120}/>
                    <Text flex={1} color={"blackAlpha.900"} as={"b"}>{TotalPrice+(TotalPrice*18/100)}</Text>
                </HStack>
                <HStack pt={10} w={"80%"}>
                        <Input onChange={handelOfferInput} colorScheme={"red"} variant='flushed'  type={"text"} placeholder="Coupon code"
                        fontWeight={"semibold"} focusBorderColor="#E53E3E" />
                    <Button py={[null,1,1]} px={[null,5,5]} colorScheme={"red"}>Go</Button>
                </HStack>
                <Button py={[null,5,5]} colorScheme={"red"} onClick={HandelCheckout} >CHECKOUT</Button>
                <HStack>
                    <Text textAlign={"center"} fontSize={"sm"} as="b" color={"#FFB326"}>{`EMI Strating at ${123} Per month`}
                    </Text><HiOutlineQuestionMarkCircle color={"red"}/>
                </HStack>
            </Stack>

       
      </Container>
    </>
  )
}

export default CartPage
