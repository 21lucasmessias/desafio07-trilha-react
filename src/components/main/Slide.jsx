import { Center, Text } from '@chakra-ui/react'
import Link from 'next/link'

function Slide({ title, text }) {
    return (
        <Link href={`/details/${title.toLowerCase()}`} >
            <Center
                w='100%'
                h='100%'
                flexDirection={'column'}
                gap={[3, 4]}
                backgroundImage={'/assets/europa.png'}
                backgroundRepeat={'no-repeat'}
                backgroundSize={'cover'}
                transition={'0.5s filter'}
                _hover={{
                    filter: 'brightness(0.8)'
                }}
                cursor={'pointer'}
            >
                <Text color='#F5F8FA' fontWeight={'bold'} fontSize={['24px', '48px']}>{title}</Text>
                <Text color='#F5F8FA' fontWeight={'bold'} fontSize={['14px', '24px']}>{text}</Text>
            </Center>
        </Link>
    )
}

export default Slide
