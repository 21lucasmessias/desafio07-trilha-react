import { Flex, Text } from "@chakra-ui/react";

function Banner({ country }) {
    return (
        <Flex
            backgroundImage={`/assets/${country}.png`}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            minH={['150px', '500px']}
            width={'100%'}
            height={'auto'}
            justify={['center', 'flex-start']}
            align={['center', 'flex-end']}
        >
            <Text
                textAlign={['center', 'start']}
                fontWeight={'semibold'}
                fontSize={['28px', '48px']}
                color='white' w='100%'
                mb={['0px', '59px']}
                ml={['0px', '140px']}
            >
                {country}
            </Text>
        </Flex>
    )
}

export default Banner
