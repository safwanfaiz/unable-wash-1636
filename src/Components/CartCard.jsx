import { Box, Button, ChakraProvider, Container, Divider, extendTheme, Flex, HStack, Image, Input, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import { TiDelete } from 'react-icons/ti';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import React, { useEffect, useState } from 'react'
const cartPriceData=[
    {
        "id":1,
        "image":"https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
        "Discounted":12000,
        "Price":10000,
        "name":"course-test data"
    },
    {
        "id":2,
        "image":"https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
        "Discounted":12000,
        "Price":10000,
        "name":"course-test data"
    },
    {
        "id":3,
        "image":"https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
        "Discounted":12000,
        "Price":10000,
        "name":"course-test data"
    },
    {
        "id":4,
        "image":"https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
        "Discounted":12000,
        "Price":10000,
        "name":"course-test data"
    }
]

const CartCard = () => {
    const [TotalPrice, setTotalPrice] =useState(0)
    const [finalPrice, setFinalPrice] =useState(0)
    const [Offer, setOffer] =useState("")
    const [finalOffer, setfinalOffer] =useState(0)
    const handelOfferInput=(e)=>{
        e.preventDefault();
        setOffer(e.target.value);
    }
    const handelOffersubmit=()=>{
        if(Offer=== ""){
            let newcalculation = (TotalPrice/2) + (TotalPrice/2*18/100);
            setFinalPrice(newcalculation)
        }
        else if(Offer==="Ex22" ){
            let Totaldiscount = (TotalPrice/2) - (TotalPrice/2)*22/100
            setFinalPrice(Totaldiscount)
        }
    }
    useEffect(()=>{
        cartPriceData && cartPriceData.map((item)=>
        setTotalPrice((prev)=> prev+ item.Price)
        )
    },[])
  return (
   <Container minW={["full","fit-content",900]} p={7} boxShadow='base'   borderRadius={7}>
        <Stack p={3}  direction={{ base: 'column', md: 'row' }}>
            <Stack pr={7} flex={4}>
                <Text  fontSize='2xl' color={"#3C4858"}  as='samp'>Cart</Text>
                {cartPriceData.map((item)=>
                <VStack key={item.id}>
                <HStack >
                    <Box as='button' variant='ghost' w={30} h={30}_active={{transform: "rotate(45deg)",}}>
                        <TiDelete size={30} color={"red"}/>
                    </Box>
                    <Image w={120} h={68} src={item.image} alt={item.cartPriceData} />
                    <Box mt={-40}><Text m={0} as={"b"} fontSize={"2xl"}>{item.name}</Text></Box>
                    <Spacer w={100}/>
                    <HStack>
                        <Text   mb={-10} as={"sup"}>{`₹ ${item.Discounted}`}</Text>
                        <Text  as={"b"}>{`₹ ${item.Price}`}</Text>
                    </HStack>
                </HStack>
                <Divider borderColor={"#3C4858"} />
                </VStack>)}
            </Stack>
            <Box>
                <Divider orientation='vertical'w={"1px"}  borderColor={"blackAlpha.900"} />
            </Box>
             <Stack flex={[0,2,2]} pl={7} h={100} justify={"initial"} align={"center"} >
                <Stack>
                <VStack flex={2}>
                        <HStack  mb={-2} pb={0} >
                            <Text >Amount</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice/2}`}</Text>
                        </HStack>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                    <VStack  flex={2}>
                        <HStack  mb={-2} pb={0} >
                            <Text >CGST 9%</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice*9/100/2}`}</Text>
                        </HStack>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                    <VStack  flex={2}>
                        <HStack  mb={-2} pb={0} >
                            <Text >SGST 9%</Text>
                            <Spacer w={120}/>
                            <Text>{`₹ ${TotalPrice *9/100/2}`}</Text>
                        </HStack>
                        <Divider w={"100%"} borderColor={"blackAlpha.900"} />
                    </VStack>
                </Stack>
                <HStack  flex={2} >
                    <Text  flex={2} color={"blackAlpha.900"} as={"b"}>Total:</Text>
                    <Spacer w={120}/>
                    <Text flex={1} color={"blackAlpha.900"} as={"b"}>{finalPrice}</Text>
                </HStack>
                <HStack pt={10} w={"80%"}>
                        <Input onChange={handelOfferInput} colorScheme={"red"} variant='flushed'  type={"text"} placeholder="Coupon code"
                        fontWeight={"semibold"} focusBorderColor="#E53E3E" />
                    <Button py={[null,1,1]} px={[null,5,5]} colorScheme={"red"}>Go</Button>
                </HStack>
                <Button py={[null,5,5]} colorScheme={"red"} >CHECKOUT</Button>
                <HStack>
                    <Text textAlign={"center"} fontSize={"sm"} as="b" color={"#FFB326"}>{`EMI Strating at ${123} Per month`}
                    </Text><HiOutlineQuestionMarkCircle color={"red"}/>
                </HStack>
            </Stack>
                
        </Stack>
   </Container>
  )
}

export default CartCard
