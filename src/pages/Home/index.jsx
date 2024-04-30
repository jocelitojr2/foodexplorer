// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PiCaretRight, PiHeartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';

import { Container, Content, Banner, CardsContent } from './styles';

import BannerDecoration from "../../assets/banner-decoration.png"
import Salada from "../../assets/Mask group.png"

import { InputNumber } from '../../components/InputNumber';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

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
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 49,97</span>

              <div className='dish-actions'>
                <InputNumber/>
                <Button title="Incluir"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 49,97</span>

              <div className='dish-actions'>
                <InputNumber/>
                <Button title="Incluir"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 49,97</span>

              <div className='dish-actions'>
                <InputNumber/>
                <Button title="Incluir"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 49,97</span>

              <div className='dish-actions'>
                <InputNumber/>
                <Button title="Incluir"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 49,97</span>

              <div className='dish-actions'>
                <InputNumber/>
                <Button title="Incluir"/>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </CardsContent>

        <CardsContent>
          <h2>Pratos principais</h2>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <span>R$ 49,97</span>
              <InputNumber/>
              <Button title="Incluir"/>
            </SwiperSlide>
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <span>R$ 49,97</span>
              <InputNumber/>
              <Button title="Incluir"/>
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

        <CardsContent>
          <h2>Bebidas principais</h2>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <span>R$ 49,97</span>
              <InputNumber/>
              <Button title="Incluir"/>
            </SwiperSlide>
            <SwiperSlide>
              <PiHeartBold size={24} className='heart'/>
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <span>R$ 49,97</span>
              <InputNumber/>
              <Button title="Incluir"/>
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

      <Footer />
    </Container>
  )
}