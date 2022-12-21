import { Box, Divider,  HStack, Image,  Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import {  REMOVE_DATA_FROM_CART } from '../Redux/App/action';
import { toast } from 'react-toastify';

export const CartCard = ({CData}) => {
    const dipatch =useDispatch();
    const handelDelete =(id)=>{
        dipatch(REMOVE_DATA_FROM_CART(id))
        toast.warning(`item deleted${id}`)
    }
  return (

                <Stack justify={"center"} align={"Center"} py={[0,5,5]}>
                <VStack key={CData.id}>
                <HStack justify={"center"} align={"Center"} >
                    <Box as='button' variant='ghost' w={30} h={30}_active={{transform: "rotate(45deg)",}} onClick={()=>handelDelete(CData.id)}>
                        <TiDelete size={30} color={"red"}/>
                    </Box>
                    <Image w={[90,120,120]}  h={[50,50,68]} src={CData.image} alt={CData.CData} />
                    <Box  w={"40%"}mt={-40} overflow={"hidden"}  m={0}><Text   as={"b"} fontSize={["10px","md","lg"]}>{CData.name}</Text></Box>
                    <Spacer w={100}/>
                    <HStack>
                        <Text   mb={-10} as={"sup"}>{`₹ ${CData.oldPrice}`}</Text>
                        <Text  as={"b"}>{`₹ ${CData.newPrice}`}</Text>
                    </HStack>
                </HStack>
                <Divider w={[300.500,700]} borderColor={"#3C4858"} />
                </VStack>
                </Stack>

  )
}


