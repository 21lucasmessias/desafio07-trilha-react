import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Banner from "../components/main/Banner";
import Logo from "../components/main/Logo";
import Swiper from "../components/main/Swiper";
import TravelTypes from "../components/main/TravelTypes";

export default function Home() {
    return (
        <Flex direction={'column'} h='100vh' w='100vw' align={'center'} pb={4} overflow={'scroll'}>
            <Logo />
            <Banner />
            <TravelTypes mt={['36px', '80px']} />

            <Center>
                <Box w={'60px'} borderBottomWidth={'1px'} borderBottomStyle={'solid'} borderBottomColor={'#47585B'} />
            </Center>

            <Text mt={['24px', '52px']} fontSize={['20px', '36px']} color='#47585B' fontWeight={'medium'} textAlign={'center'}>
                Vamos nessa?<br></br>
                Então escolha seu continente
            </Text>

            <Swiper />
        </Flex>
    )
}