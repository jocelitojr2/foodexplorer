import { Container, Form } from "./styles";

import favIcon from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
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
          />
        </label>

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
        
        <Button title="Criar conta" />

        <a href="">
          Já tenho uma conta
        </a>
      </Form>

    </Container>
  );
}