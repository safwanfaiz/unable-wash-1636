import { Box, Button, Center, ChakraProvider, Container, Divider, extendTheme, Flex, HStack, Image, Input, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { DELETE_DATA_STUDENT_COURSE, REMOVE_DATA_FROM_CART } from '../Redux/App/action';

export const CartCard = ({CData}) => {
    const dipatch =useDispatch();
    const handelDelete =(id)=>{
        dipatch(REMOVE_DATA_FROM_CART(id))
        alert(`item deleted${id}`)
    }
  return (

                <Stack justify={"center"} align={"Center"} py={5}>
                <VStack key={CData.id}>
                <HStack >
                    <Box as='button' variant='ghost' w={30} h={30}_active={{transform: "rotate(45deg)",}} onClick={()=>handelDelete(CData.id)}>
                        <TiDelete size={30} color={"red"}/>
                    </Box>
                    <Image w={120} h={68} src={CData.image} alt={CData.CData} />
                    <Box  w={"40%"}mt={-40}><Text  isTruncated m={0} as={"b"} fontSize={"lg"}>{CData.name}</Text></Box>
                    <Spacer w={100}/>
                    <HStack>
                        <Text   mb={-10} as={"sup"}>{`₹ ${CData.oldPrice}`}</Text>
                        <Text  as={"b"}>{`₹ ${CData.newPrice}`}</Text>
                    </HStack>
                </HStack>
                <Divider borderColor={"#3C4858"} />
                </VStack>
                </Stack>

  )
}


