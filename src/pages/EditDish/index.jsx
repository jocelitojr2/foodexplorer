import { PiCaretLeftBold, PiUploadSimpleBold, PiCaretDownBold } from "react-icons/pi";
import { Container, Content, Form } from './styles';
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { DishIngredients } from '../../components/DishIngredients';
export function EditDish() {
  const { userPermission } = useAuth();

  const isAdmin = userPermission.role_id === 1 ? true : false;

  const { product_id } = useParams('product_id');

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
    setIngredients(prevState => [...prevState, {name: newIngredients}]);
    setNewIngredients("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient.name !== deleted));
  }

  async function handleEditProduct() {
    const formData = new FormData();

    if(newIngredients) {
      return alert("Voce deixou um ingrediente sem adicionar!")
    }

    if(!name) {
      return alert("Digite um nome para o Produto!");
    }

    if(categorie === "") {
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

    if (isAdmin == false) {
      alert("Somente administrador pode editar um produto!");

      return navigate(-1);
    }

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", file);
    formData.append("price", Number(price));
    formData.append("ingredients", JSON.stringify(ingredients.map((ingredient) => ingredient.name)));
    formData.append("category_id", categorie);
     
    try {
      await api.put(`/products/${product_id}`, formData);

      alert("Produto editado com sucesso!");
      navigate(`/details/${product_id}`);
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  }

  async function handleRemoveProduct() {
    try {
      const response = await api.delete(`/products/${product_id}`);
      console.log(response);
      alert("Produto deletado com sucesso!");
      navigate(-1);
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      const categoryResponse = await api.get("/categories");
      setCategories(categoryResponse.data);
    }
    fetchCategories();
    
    async function fetchProduct() {
      const productResponse = await api.get(`/products/${product_id}`);
      const { name, description, image_url, price } = productResponse.data.product;
      const category_id = productResponse.data.category.id;
      const { ingredients } = productResponse.data;

      setName(name);
      setFileName(image_url);
      setDescription(description);
      setPrice(price);
      setCategorie(category_id);
      setIngredients(ingredients);
    }
    fetchProduct()
  }, [product_id])

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/" className="back-button">
            <PiCaretLeftBold size={32} />
            voltar
        </Link>

        <Form onSubmit={(e) => { e.preventDefault(); handleEditProduct(); }}>
          <h2>Editar prato</h2>
          <div className="row">
            <div className="separator w-25">
              <span>Imagem do prato</span>
              <label className="upload-file">
                <PiUploadSimpleBold  size={24}/>
                <span>{fileName}</span>
                
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
              <Input placeholder="Ex: Salada Ceasar" onChange={e => setName(e.target.value)} value={name} />
            </div>

            <div className="separator w-25">
              <span>
                Categoria
              </span>
              <label className="select">
                <select onChange={e => setCategorie(e.target.value)} value={categorie} >
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
                      value={ingredient.name}
                      onClick={() => handleRemoveIngredients(ingredient.name)} 
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
              <Input placeholder="R$ 00,00"  onChange={e => setPrice(e.target.value)} value={price}/>
            </div>

            <div className="separator w-100">
              <span>
                Descrição
              </span>
              <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"  onChange={e => setDescription(e.target.value)} defaultValue={description} />
            </div>
          </div>

          <div className="action-buttons">
            <Button className="black" title="Excluir prato" onClick={handleRemoveProduct}/>
            <Button title="Salvar alterações" type="submit" />
          </div>

        </Form>
      </Content>

      <Footer />
    </Container>
  )
}