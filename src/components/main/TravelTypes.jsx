import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react"
import TravelTypesItemMobile from "./TravelTypesItemMobile"
import TravelTypesItemWeb from "./TravelTypesItemWeb"

function TravelTypes(props) {
    const isWebUser = useBreakpointValue({
        base: false,
        lg: true,
    })

    if (isWebUser) {
        return (
            <HStack spacing={20} {...props}>
                <TravelTypesItemWeb imgPath={'/assets/cocktail.svg'} title='vida noturna' />
                <TravelTypesItemWeb imgPath={'/assets/surf.svg'} title='praia' />
                <TravelTypesItemWeb imgPath={'/assets/building.svg'} title='moderno' />
                <TravelTypesItemWeb imgPath={'/assets/museum.svg'} title='clássico' />
                <TravelTypesItemWeb imgPath={'/assets/earth.svg'} title='e mais...' />
            </HStack>
        )
    }

    return (
        <Flex
            direction={'row'}
            flexWrap={'wrap'}
            align={'center'}
            py={9}
        >
            <TravelTypesItemMobile title='vida noturna' />
            <TravelTypesItemMobile title='praia' />
            <TravelTypesItemMobile title='moderno' />
            <TravelTypesItemMobile title='clássico' />
            <TravelTypesItemMobile title='e mais...' />
        </Flex>
    )
}

export default TravelTypes
