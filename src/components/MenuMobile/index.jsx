import { useEffect } from 'react';
import { useAuth } from "../../hooks/auth"
import { Container } from './styles'
import { PiX, PiMagnifyingGlass  } from "react-icons/pi";
import { Link } from "react-router-dom";

import { Input } from "../Input"
export function MenuMobile({ menuIsVisible, setMenuIsVisible}) {
  const { signOut } = useAuth();

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])  
  return (
    <Container $isVisible={menuIsVisible}>
      <div className='header'>
        <PiX size={32} onClick={() => setMenuIsVisible(false)} />
        <span>Menu</span>
      </div>
      <nav>
        <Input 
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass} 
        />
        <ul>
          <li>
            <Link to="/new">Novo Prato</Link>
          </li>
          <li>
            <Link to="/" onClick={signOut}>Sair</Link>
          </li>
        </ul>
        
      </nav>
    </Container>
  )
}