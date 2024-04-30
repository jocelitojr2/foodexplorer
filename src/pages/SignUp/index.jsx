import { useState } from 'react';
import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import favIcon from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar")
        }
      })

  }


  return (
    <Container>
      <div className="logo">
        <img src={favIcon} alt="Logo foodexplorer" />
        <h1>
          food explorer
        </h1>
      </div>

      <Form>
        <h2>Crie sua conta</h2>

        <label>
          <span>Seu Nome</span>
          <Input 
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Email</span>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha</span>
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        
        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>

    </Container>
  );
}