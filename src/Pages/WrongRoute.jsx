import { Button,Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'
const WrongRoute = () => {
    const navigate = useNavigate();
    const HandleGoback =()=>{
        navigate("/")
    }
  return (
    <VStack align={"center"} justify={"center"} h={834} bg={"black"} >
      <Image position={"sticky"} src='https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif' alt={"Wrongpage Logo"}/>
      <Button  bg={'red.400'} color={'white'}leftIcon={<IoMdArrowRoundBack/>}
               size='lg'_hover={{ bg: 'red.500', }}  onClick={HandleGoback}>
                Go Back to Home
      </Button>
    </VStack>
  )
}

export default WrongRoute
