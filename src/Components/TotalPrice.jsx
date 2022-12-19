import { Stack, VStack,Spacer,Text,Divider, HStack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

const TotalPrice = () => {
    
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
  return (
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
  )
}

export default TotalPrice
