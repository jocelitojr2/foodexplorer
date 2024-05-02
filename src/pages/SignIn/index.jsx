import { useState } from "react";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import favIcon from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
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
        <h2>Faça login</h2>

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
        
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>

    </Container>
  );
}