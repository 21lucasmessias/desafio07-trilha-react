import { Box, Center, Image } from '@chakra-ui/react'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'

function Logo({ backButton }) {
    return (
        <Center position={'relative'} w='100%' minH={['50px', '100px']}>
            {backButton && (
                <Box position={'absolute'} left={4} cursor={'pointer'}>
                    <Link href='/'>
                        <ChevronLeftIcon fontSize={'lg'} />
                    </Link>
                </Box>
            )}
            <Image maxH={['20px', '46px']} h='100%' w='auto' src={'/assets/Logo.svg'} />
        </Center>
    )
}

export default Logo
