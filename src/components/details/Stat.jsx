import { Stat as StatChakra, StatHelpText, StatNumber } from '@chakra-ui/react'

export function Stat({ number, title, ...rest }) {
    return (
        <StatChakra {...rest}>
            <StatNumber fontSize={['20px', '48px']} color={'#FFBA08'}>{number}</StatNumber>
            <StatHelpText fontSize={['18px', '24px']} color={'#47585B'} fontWeight={'semibold'}>{title}</StatHelpText>
        </StatChakra>
    )
}