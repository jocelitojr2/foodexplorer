import { useState } from "react";
import { PiReceipt, PiListLight, PiMagnifyingGlass, PiSignOut } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from '../../context/CartContext';

import { Container } from "./styles";
import { MenuMobile } from "../MenuMobile";
import { Input } from "../Input"

import favIcon from "../../assets/logo.svg"

export function Header({ onSearch }) {
  const { signOut } = useAuth();
  const userData = localStorage.getItem("@FoodExplorer:user");
  const { userPermission } = JSON.parse(userData);
  const { cartItems } = useCart();
  
  const isAdmin = userPermission.role_id === 1 ? true : false;
  
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        onSearch={onSearch}
      />
      
      <PiListLight size={32} onClick={() => setMenuIsVisible(true)} className="icon-menu-mobile" />

      <Link to="/" className="logo">
        <img src={favIcon} alt="Logo foodexplorer" />
        <div className="logo-title">
          <span>
            food explorer
          </span>
          {isAdmin && <span className="logo-tag">admin</span>}
        </div>
      </Link>

      <div className="desktop-search">  
        <Input 
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlass} 
            value={searchTerm}
            onChange={handleSearchChange}
        />
      </div>

      <a href="#" className="cart">
        <PiReceipt size={32} />
        <span>{cartItems}</span>
      </a>

      <div className="desktop-components">
        {isAdmin ?
          <Link to="/new" className="new-dish">
            <span>Novo prato</span>
          </Link>
          :
          <a href="#" className="cart-desktop">
            <PiReceipt size={32} />
            <span>Pedidos({cartItems})</span>
          </a>
        }
        
        <Link to="/" onClick={signOut}>
          <PiSignOut  size={32} />
        </Link>
      </div>

      
    </Container>
  );
}