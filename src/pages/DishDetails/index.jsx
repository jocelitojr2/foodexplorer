import { PiCaretLeftBold, PiReceipt } from "react-icons/pi";
import { Container, Content, Details } from './styles';

import Salada from "../../assets/Mask group.png"

import { InputNumber } from '../../components/InputNumber';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

export function DishDetails() {
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText title="voltar" icon={PiCaretLeftBold} className="back-button" />

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
            <div className="dish-options">
              <InputNumber />
              <Button title="pedir ∙ R$ 25,00" icon={PiReceipt} className="button-include"/>
            </div>
          </div>
        </Details>
  
      </Content>

      <Footer />
    </Container>
  )
}