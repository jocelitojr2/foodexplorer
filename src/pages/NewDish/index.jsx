import { PiCaretLeftBold, PiUploadSimpleBold, PiCaretDownBold } from "react-icons/pi";
import { Container, Content, Form } from './styles';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { DishIngredients } from '../../components/DishIngredients';
export function NewDish() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [name, setName] = useState("");
  const [categorie, setCategorie] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile)
      setFileName(selectedFile.name);
    }
  };

  function handleAddIngredients() {
    setIngredients(prevState => [...prevState, newIngredients]);
    setNewIngredients("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewProduct() {
    const formData = new FormData();

    if(newIngredients) {
      return alert("Voce deixou um ingrediente sem adicionar!")
    }

    if(!file) {
      return alert("Selecione uma imagem para o Produto!");
    }

    if(!name) {
      return alert("Digite um nome para o Produto!");
    }

    if(!categorie) {
      return alert("Selecione uma categoria para o Produto!");
    }

    if(ingredients.length <= 0) {
      return alert("Adicione pelo menos um ingrediente para o Produto!");
    }

    if(!price || price <= 0) {
      return alert("Digite um preço para o Produto!");
    }

    if(!description) {
      return alert("Digite uma descrição para o Produto!");
    }

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", file);
    formData.append("price", Number(price));
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("category_id", categorie);
    
    try {
      const response = await api.post("/products", formData);

      console.log(response);

      alert("Produto criado com sucesso!");
      navigate(-1);
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      const categoryResponse = await api.get("/categories");
      setCategories(categoryResponse.data);
    }

    fetchCategories();
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/" className="back-button">
            <PiCaretLeftBold size={32} />
            voltar
        </Link>

        <Form onSubmit={(e) => { e.preventDefault(); handleNewProduct(); }}>
          <h2>Novo prato</h2>
          
          <div className="row">
            <div className="separator w-25">
              <span>Imagem do prato</span>
              <label className="upload-file">
                <PiUploadSimpleBold  size={24}/>
                <span>{fileName || 'Selecione imagem'}</span>
                
                <input 
                  id="upload" 
                  type="file" 
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="separator w-50">
              <span>
                Nome
              </span>
              <Input placeholder="Ex.: Salada Ceasar" onChange={e => setName(e.target.value)} />
            </div>

            <div className="separator w-25">
              <span>
                Categoria
              </span>
              <label className="select">
                <select onChange={e => setCategorie(e.target.value)} >
                  <option value="">Selecione a categoria</option>
                  { categories && categories.map(category => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                  ))}
                </select>
                <PiCaretDownBold size={24} />
              </label>
            </div>

            <div className="separator w-75">
              <span>
                Ingredientes
              </span>
              <div className="dish-ingredients">
                {
                  ingredients && ingredients.map((ingredient, index) => (
                    <DishIngredients 
                      key={String(index)} 
                      value={ingredient}
                      onClick={() => handleRemoveIngredients(ingredient)} 
                    />
                  ))
                }
                <DishIngredients 
                  placeholder="Adicionar" 
                  isNew
                  value={newIngredients}
                  onChange={e => setNewIngredients(e.target.value)}
                  onClick={handleAddIngredients}
                />
              </div>
            </div>

            <div className="separator w-25">
              <span>
                Preço
              </span>
              <Input placeholder="R$ 00,00"  onChange={e => setPrice(e.target.value)} />
            </div>

            <div className="separator w-100">
              <span>
                Descrição
              </span>
              <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"  onChange={e => setDescription(e.target.value)} />
            </div>
          </div>

          <div className="action-buttons">
            <Button title="Cadastrar Prato" type="submit" />
          </div>

        </Form>
      </Content>

      <Footer />
    </Container>
  )
}