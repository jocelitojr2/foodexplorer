import { useEffect } from 'react';
import { Container } from './styles'
import { PiX, PiMagnifyingGlass  } from "react-icons/pi";

import { Input } from "../Input"
export function MenuMobile({ menuIsVisible, setMenuIsVisible}) {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])  
  return (
    <Container $isVisible={menuIsVisible}>
      <div className='header'>
        <PiX size={45} onClick={() => setMenuIsVisible(false)} />
        <span>Menu</span>
      </div>
      <nav>
        <Input 
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlass} 
        />
        <ul>
          <li>
            <a href="#">teste 2</a>
          </li>
          <li>
            <a href="#">teste 3</a>
          </li>
        </ul>
        
      </nav>
    </Container>
  )
}