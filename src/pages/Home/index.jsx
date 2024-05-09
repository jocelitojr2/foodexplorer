// Import Swiper React components
import { PiCaretRight, PiHeartBold, PiPencilSimple  } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { Navigation } from 'swiper/modules';
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import 'swiper/css';
import 'swiper/css/navigation';


import { Container, Content, Banner, CardsContent } from './styles';

import BannerDecoration from "../../assets/banner-decoration.png"

import { InputNumber } from '../../components/InputNumber';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';


export function Home() {
  const { user } = useAuth();
  const isAdmin = user.role_id === 1 ? true : false;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    async function fetchCategoriesAndProducts() {
      const categoryResponse = await api.get("/categories");
      setCategories(categoryResponse.data);
      
      const productResponse = await api.get("/products");
      setProducts(productResponse.data);
    }

    fetchCategoriesAndProducts();
  }, [])

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

        {
          categories && categories.map(category => (
            <CardsContent key={String(category.id)}>
              <h2>{category.name}</h2>
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                navigation={true} 
                modules={[Navigation]}
                className="mySwiper"
              >
                {products.filter(product => product.category.id === category.id).map(product => (
                  <SwiperSlide key={product.id}>
                    <Link to={`/edit/${product.id}`}>
                      {isAdmin ? <PiPencilSimple size={24} className="pencil"/> : <PiHeartBold size={24} className='heart'/> }
                    </Link>
                    <img src={`${api.defaults.baseURL}/files/${product.image_url}`} alt={product.name} />
                    <Link to={`/details/${product.id}`}>
                      {product.name}
                      <PiCaretRight />
                    </Link>
                    <p>{product.description}</p>
                    <span>R${product.price}</span>
      
                    {!isAdmin &&
                      <div className='dish-actions'>
                        <InputNumber/>
                        <Button title="Incluir"/>
                      </div>
                    }
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardsContent>
          ))
        }
        {/*
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
              {isAdmin ? <PiPencilSimple size={24} className="pencil"/> : <PiHeartBold size={24} className='heart'/> }
              <img src={Salada} alt="Imagem do prato" />
              <Link to="/details/1">
                Salada Revanello
                <PiCaretRight />
              </Link>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 49,97</span>

              {!isAdmin &&
                <div className='dish-actions'>
                  <InputNumber/>
                  <Button title="Incluir"/>
                </div>
              }
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
        </CardsContent> */}

      </Content>

      <Footer />
    </Container>
  )
}