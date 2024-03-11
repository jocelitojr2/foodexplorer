import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <Container>
      <Header />

      <Button title="Entrar" loading />
      <Button title="Criar conta" />
      <Button title="Voltar" />
    </Container>
  )
}