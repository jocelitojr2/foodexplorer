import { Container, Content } from './styles';

import favIcon from "../../assets/logo.svg"

export function Footer() {
  return (
    <Container>
      <Content>
        <a href="/" className="logo">
          <img src={favIcon} alt="Logo foodexplorer" />
          <span>
            food explorer
          </span>
        </a>

        <span>&copy; 2024 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  )
}