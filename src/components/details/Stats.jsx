import { Flex } from "@chakra-ui/react";
import { Stat } from "./Stat";

export function Stats() {
    return (
        <Flex w='100%' px={[4, '140px']} gap={['unset', '42px']}>
            <Stat number={50} title={'países'} />
            <Stat number={60} title={'línguas'} />
            <Stat number={24} title={'cidades +100'} flex='1.5' />
        </Flex>
    )
}