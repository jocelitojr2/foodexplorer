// Import Swiper React components
import { PiCaretRight, PiHeartBold, PiPencilSimple  } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { Navigation } from 'swiper/modules';
import { useCart } from '../../context/CartContext';
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
  const userData = localStorage.getItem("@FoodExplorer:user");
  const { userPermission } = JSON.parse(userData);
  const { addToCart } = useCart();
  
  const isAdmin = userPermission.role_id === 1 ? true : false;
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (term) => {
    if (term === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  
  useEffect(() => {
    async function fetchCategoriesAndProducts() {
      const categoryResponse = await api.get("/categories");
      setCategories(categoryResponse.data);
      
      const productResponse = await api.get("/products");
      setProducts(productResponse.data);
      setFilteredProducts(productResponse.data);
    }
    fetchCategoriesAndProducts();
  }, []);

  return (
    <Container>
      <Header onSearch={handleSearch} />

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
                {filteredProducts.filter(product => product.category.id === category.id).map(product => (
                  <SwiperSlide key={product.id}>
                    {isAdmin ?
                      <Link to={`/edit/${product.id}`}> 
                        <PiPencilSimple size={24} className="pencil"/>
                      </Link> : 
                      <Link to={`/details/${product.id}`}>
                        <PiHeartBold size={24} className='heart'/>
                      </Link>
                    }
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
                        <Button title="Incluir" onClick={addToCart} />
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