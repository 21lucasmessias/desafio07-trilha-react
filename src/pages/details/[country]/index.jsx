import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Banner from "../../../components/details/Banner";
import { Cities } from "../../../components/details/Cities";
import { Stats } from "../../../components/details/Stats";
import Logo from "../../../components/main/Logo";

export default function Details() {
    const router = useRouter()
    const { country } = router.query

    return (
        <Flex direction={'column'} w='100%' h='100vh' align={'center'} pb={['16px', '35px']} overflow={'scroll'}>
            <Logo backButton={true} />
            <Banner country={country[0].toUpperCase() + country.substring(1)} />

            <Flex direction={['column', 'row']} align={'center'} px={[4, '140px']} my={['0px', '80px']}>
                <Box p={[4, 0]} pt={[6, 0]}>
                    <Text color={'#47585B'} fontWeight={'regular'} fontSize={['14px', '24px']} textAlign={'justify'}>
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
                        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural,
                        o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                </Box>

                <Stats />
            </Flex>


            <Cities country={country} />
        </Flex>
    )
}