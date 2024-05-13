import { useState, useEffect } from "react";
import { PiReceipt, PiListLight, PiMagnifyingGlass, PiSignOut } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from '../../context/CartContext';

import { Container } from "./styles";
import { MenuMobile } from "../MenuMobile";
import { Input } from "../Input"

import favIcon from "../../assets/logo.svg"

export function Header() {
  const { signOut, userPermission } = useAuth();
  const [isAdmin, setIsAdmin] = useState();
  const { cartItems } = useCart();
  
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    async function UserPermission() {
      setIsAdmin(userPermission.role_id === 1 ? true : false);
    }

    UserPermission()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
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

        {/* <a href="#" className="cart-desktop">
          <PiReceipt size={32} />
          <span>Pedidos(0)</span>
        </a> */}
        
        <Link to="/" onClick={signOut}>
          <PiSignOut  size={32} />
        </Link>
      </div>

      
    </Container>
  );
}