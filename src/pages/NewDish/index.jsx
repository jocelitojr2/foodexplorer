import { PiCaretLeftBold, PiUploadSimpleBold, PiCaretDownBold } from "react-icons/pi";
import { Container, Content, Form } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { DishIngredients } from '../../components/DishIngredients';
export function NewDish() {
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText title="voltar" icon={PiCaretLeftBold} className="back-button" />

        <Form>
          <h2>Novo prato</h2>

          <div className="separator">
            <span>Imagem do prato</span>
            <label className="upload-file">
              <PiUploadSimpleBold  size={24}/>
              <span>Selecione imagem</span>
              
              <input 
                id="upload" 
                type="file" 
              />
            </label>
          </div>

          <div className="separator">
            <span>
              Nome
            </span>
            <Input placeholder="Ex.: Salada Ceasar" />
          </div>

          <div className="separator">
            <span>
              Categoria
            </span>
            <label className="select">
              <select>
                <option value="">Selecione a categoria</option>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
              <PiCaretDownBold size={24} />
            </label>
          </div>

          <div className="separator">
            <span>
              Ingredientes
            </span>
            <div className="dish-ingredients">
              <DishIngredients placeholder="Adicionar" isNew/>
              <DishIngredients value="Pão Naan"/>
            </div>
          </div>

          <div className="separator">
            <span>
              Preço
            </span>
            <Input placeholder="R$ 00,00" />
          </div>

          <div className="separator">
            <span>
              Descrição
            </span>
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </div>

          <div className="action-buttons">
            <Button title="Excluir prato" />
            <Button title="Salvar alterações" disabled />
          </div>

        </Form>
      </Content>

      <Footer />
    </Container>
  )
}