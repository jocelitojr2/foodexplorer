import { PiCaretLeftBold, PiReceipt } from "react-icons/pi";
import { Container, Content, Details } from './styles';
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom";

import Salada from "../../assets/Mask group.png"

import { InputNumber } from '../../components/InputNumber';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

export function DishDetails() {
  const { user } = useAuth();
  const isAdmin = user.role_id ? true : false;

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/" className="back-button">
          <PiCaretLeftBold size={16} />
          Voltar
        </Link>

        <Details>
          <img src={Salada} alt="Imagem decorativa do banner" />
          <div className='dish-information'>
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className="dish-tags">
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </div>
            {isAdmin ? (
              <div className="dish-options">
                <Link to="#" className="button-edit">
                  <span>Editar prato</span>
                </Link>
              </div>
              ) : (
              <div className="dish-options">
                <InputNumber />
                <Button title="pedir ∙ R$ 25,00" icon={PiReceipt} className="button-include"/>
              </div>
            )}
          </div>
        </Details>
  
      </Content>

      <Footer />
    </Container>
  )
}