import { useEffect, useState } from 'react';
import { useAuth } from "../../hooks/auth"
import { Container } from './styles'
import { PiX, PiMagnifyingGlass  } from "react-icons/pi";
import { Link } from "react-router-dom";

import { Input } from "../Input"
export function MenuMobile({ menuIsVisible, setMenuIsVisible, onSearch}) {
  const { signOut } = useAuth();
  const userData = localStorage.getItem("@FoodExplorer:user");
  const { userPermission } = JSON.parse(userData);
  const [searchTerm, setSearchTerm] = useState('');

  const isAdmin = userPermission.role_id === 1 ? true : false;

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleBlurSearch = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setMenuIsVisible(false);
    }
  };

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
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleBlurSearch}
        />
        <ul>
        {isAdmin &&
          <li>
            <Link to="/new">Novo Prato</Link>
          </li>
        }
          <li>
            <Link to="/" onClick={signOut}>Sair</Link>
          </li>
        </ul>
        
      </nav>
    </Container>
  )
}