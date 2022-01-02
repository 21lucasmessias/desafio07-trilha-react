import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

export function City({ country, cityName, city, stateName, state }) {
    return (
        <Flex
            direction={'column'}
            backgroundColor={'white'}
            borderRadius={'2xl'}
        >
            <Image src={`/assets/${country}/${city}.png`} minH='173px' />

            <Flex
                p={6}
                align={'center'}
                justify={'space-between'}
                borderWidth={'1px'}
                borderColor={'rgba(255, 186, 8, 50)'}
                borderTopWidth={'0px'}
                borderBottomRadius={'2xl'}
            >
                <Flex direction={'column'} gap={3}>
                    <Text fontSize={['20px']} fontWeight={'semibold'} color={'#47585B'}>
                        {cityName[0].toUpperCase() + cityName.substring(1)}
                    </Text>
                    <Text fontSize={['16px']} fontWeight={'medium'} color={'#999999'}>
                        {stateName[0].toUpperCase() + stateName.substring(1)}
                    </Text>
                </Flex>

                <Avatar src={`/assets/${country}/${state}_banner.png`} />
            </Flex>

        </Flex>
    )
}