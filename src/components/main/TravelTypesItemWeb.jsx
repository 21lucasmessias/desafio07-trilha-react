import { Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

function TravelTypesItem({ imgPath, title }) {
    return (
        <Center w={'158px'} h={'145px'} flexDirection={'column'} gap={4}>
            <Image src={imgPath} />
            <Text fontSize={'24px'} color='#47585B' fontWeight={'semibold'}>
                {title}
            </Text>
        </Center>
    )
}

export default TravelTypesItem
