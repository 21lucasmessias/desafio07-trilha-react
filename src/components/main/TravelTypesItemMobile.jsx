import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function TravelTypesItem({ title }) {
    return (
        <Flex
            flex='1'
            minW='50%'
            justify={'center'}
            align='baseline'
            gap={2}
            minH='40px'
        >
            <Image h={'8px'} src={'./assets/ellipse.png'} />
            <Text fontWeight={'medium'} fontSize={'18px'} color={'#47585B'}>
                {title}
            </Text>
        </Flex>
    )
}

export default TravelTypesItem
