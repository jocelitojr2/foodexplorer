import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

import favIcon from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <div className="logo">
        <img src={favIcon} alt="Logo foodexplorer" />
        <h1>
          food explorer
        </h1>
      </div>

      <Form>
        <h2>Faça login</h2>

        <label>
          <span>Email</span>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
          />
        </label>

        <label>
          <span>Senha</span>
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
          />
        </label>
        
        <Button title="Entrar" />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>

    </Container>
  );
}