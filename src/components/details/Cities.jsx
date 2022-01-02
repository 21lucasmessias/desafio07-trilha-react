import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { City } from "./City";

const dummyCities = [
    {
        cityName: 'Londres',
        city: 'london',
        stateName: 'Reino Unido',
        state: 'reign_unit',
    },
    {
        cityName: 'Paris',
        city: 'paris',
        stateName: 'França',
        state: 'france',
    },
    {
        cityName: 'Roma',
        city: 'roma',
        stateName: 'Itália',
        state: 'italy',
    },
    {
        cityName: 'Praga',
        city: 'praga',
        stateName: 'República Tcheca',
        state: 'tchec',
    },
    {
        cityName: 'Amsterdã',
        city: 'amsterda',
        stateName: 'Holanda',
        state: 'holand',
    }
]

export function Cities({ country }) {
    const [cities, citiesSet] = useState([])

    useEffect(() => {
        citiesSet(dummyCities)
    }, [])

    return (
        <Flex w='100%' px={[4, '140px']} direction={'column'} gap={['20px', '40px']}>
            <Text w='100%' textAlign={'start'} fontSize={['24px']} fontWeight={'medium'} color='#47585B'>
                Cidades +100
            </Text>

            <SimpleGrid minChildWidth={'256px'} spacing={['20px', '45px']}>
                {cities.map(({ cityName, city, stateName, state }) => (
                    <City
                        key={cityName}
                        country={country}
                        cityName={cityName}
                        city={city}
                        stateName={stateName}
                        state={state}
                    />
                ))}
            </SimpleGrid>

        </Flex>
    )
}