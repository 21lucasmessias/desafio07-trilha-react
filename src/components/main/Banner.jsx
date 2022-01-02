import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

function Banner() {
    return (
        <Flex
            backgroundImage={'/assets/background.jpg'}
            backgroundPosition={'0% 30%'}
            w='100%'
            minH={['163px', '335px']}
            px={4}
            py={7}
        >
            <Center
                flex={'1'}
                flexDirection={'column'}
                gap={[2, 8]}
            >
                <Text fontWeight={'medium'} fontSize={['20px', '36px']} color='white' w='100%' maxW={'500px'}>
                    5 Continentes,<br /> infinitas possibilidades.
                </Text>
                <Text fontWeight={'400'} fontSize={['14px', '20px']} color='white' w='100%' maxW={'500px'}>
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Center>

            <Box flex={'1'} position={'relative'} display={['none', 'flex']}>
                <Box
                    position={'absolute'}
                    w='100%'
                    align='center'
                    bottom={'-40px'}
                    transform='rotate(3deg)'
                >
                    <Image
                        src={'/assets/Airplane.svg'}
                    />
                </Box>
            </Box>
        </Flex>
    )
}

export default Banner
