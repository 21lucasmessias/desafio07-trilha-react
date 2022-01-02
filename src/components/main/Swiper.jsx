import { Flex } from "@chakra-ui/react";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slide from "./Slide";

import styles from '../../styles/swiper.module.scss'

function Swiper() {
    return (
        <Flex
            w={'100%'}
            flex='1'
            minH={['250px', '450px']}
            maxW={'1240px'}
            bgColor={'rgba(28, 20, 1, 0.35)'}
            mb={'24px'}
            mt={'20px'}
        >
            <ReactSwiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <Slide title={'Europa'} text='O continente mais antigo.' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide title={'Europa'} text='O continente mais antigo.' />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide title={'Europa'} text='O continente mais antigo.' />
                </SwiperSlide>
            </ReactSwiper>
        </Flex>
    )
}

export default Swiper
