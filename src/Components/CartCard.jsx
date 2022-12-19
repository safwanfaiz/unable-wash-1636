import { Box, Button, ChakraProvider, Container, Divider, extendTheme, Flex, HStack, Image, Input, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { DELETE_DATA_STUDENT_COURSE } from '../Redux/App/action';

export const CartCard = ({CData}) => {
    const dipatch =useDispatch();
    const handelDelete =(id)=>{
        dipatch(DELETE_DATA_STUDENT_COURSE(({id}))).then((r)=>{
            
        })
    }
  return (
   <Container minW={["full","fit-content",900]} p={7} boxShadow='base'   borderRadius={7}>
        <Stack p={3}  direction={{ base: 'column', md: 'row' }}>
            <Stack pr={7} flex={5}>
                <Text  fontSize='2xl' color={"#3C4858"}  as='samp'>Cart</Text>
                
                <VStack key={CData.id}>
                <HStack >
                    <Box as='button' variant='ghost' w={30} h={30}_active={{transform: "rotate(45deg)",}} onClick={()=>handelDelete(CData.id)}>
                        <TiDelete size={30} color={"red"}/>
                    </Box>
                    <Image w={120} h={68} src={CData.image} alt={CData.CData} />
                    <Box mt={-40}><Text m={0} as={"b"} fontSize={"lg"}>{CData.name}</Text></Box>
                    <Spacer w={100}/>
                    <HStack>
                        <Text   mb={-10} as={"sup"}>{`₹ ${CData.oldPrice}`}</Text>
                        <Text  as={"b"}>{`₹ ${CData.newPrice}`}</Text>
                    </HStack>
                </HStack>
                <Divider borderColor={"#3C4858"} />
                </VStack>
            </Stack>
            <Box>
                <Divider orientation='vertical'w={"1px"}  borderColor={"blackAlpha.900"} />
            </Box>
             
                
        </Stack>
   </Container>
  )
}


