import { PiCaretLeftBold, PiReceipt } from "react-icons/pi";
import { Container, Content, Details } from './styles';
import { useCart } from '../../context/CartContext';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { api } from "../../services/api";

import { InputNumber } from '../../components/InputNumber';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

export function DishDetails() {
  const userData = localStorage.getItem("@FoodExplorer:user");
  const { userPermission } = JSON.parse(userData);
  const { addToCart } = useCart();
  
  const isAdmin = userPermission.role_id === 1 ? true : false;
  const { product_id } = useParams('product_id');

  const [fileName, setFileName] = useState('');
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const productResponse = await api.get(`/products/${product_id}`);
      const { name, description, image_url, price } = productResponse.data.product;
      const { ingredients } = productResponse.data;

      setName(name);
      setFileName(image_url);
      setDescription(description);
      setPrice(price);
      setIngredients(ingredients);
    }
    fetchProduct()
  }, [product_id])

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/" className="back-button">
          <PiCaretLeftBold size={16} />
          Voltar
        </Link>

        <Details>
          <img src={`${api.defaults.baseURL}/files/${fileName}`} alt={name} />
          <div className='dish-information'>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="dish-tags">
              { ingredients && ingredients.map((ingredient) => (
                  <Tag key={ingredient.id} title={ingredient.name} />
                ))
              }
            </div>
            {isAdmin ? (
              <div className="dish-options">
                <Link to={`/edit/${product_id}`} className="button-edit">
                  <span>Editar prato</span>
                </Link>
              </div>
              ) : (
              <div className="dish-options">
                <InputNumber />
                <Button onClick={addToCart} title={`pedir ∙ R$${price}`} icon={PiReceipt} className="button-include"/>
              </div>
            )}
          </div>
        </Details>
  
      </Content>

      <Footer />
    </Container>
  )
}