// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Container, Content, Banner, CardsContent } from './styles';

import BannerDecoration from "../../assets/banner-decoration.png"

import { Pagination } from 'swiper/modules';
import { Header } from '../../components/Header';
//import { Input } from '../../components/Input';
import { InputNumber } from '../../components/InputNumber';
//import { Button } from '../../components/Button';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Banner>
          <img src={BannerDecoration} alt="Imagem decorativa do banner" />
          <div className='banner-information'>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>

        <CardsContent>
          <h2>Refeições</h2>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <InputNumber/>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </CardsContent>

      </Content>
    </Container>
  )
}