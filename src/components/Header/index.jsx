import { useState } from "react";
import { PiReceipt, PiListLight, PiMagnifyingGlass, PiSignOut } from "react-icons/pi";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { MenuMobile } from "../MenuMobile";
import { Input } from "../Input"

import favIcon from "../../assets/logo.svg"

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      
      <PiListLight size={32} onClick={() => setMenuIsVisible(true)} className="icon-menu-mobile" />

      <Link to="/" className="logo">
        <img src={favIcon} alt="Logo foodexplorer" />
        <span>
          food explorer
        </span>
      </Link>

      <div className="desktop-search">  
        <Input 
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlass} 
        />
      </div>

      <a href="#" className="cart">
        <PiReceipt size={32} />
        <span>1</span>
      </a>

      <div className="desktop-components">
        <a href="#" className="cart-desktop">
          <PiReceipt size={32} />
          <span>Pedidos(0)</span>
        </a>
        
        <Link to="/">
          <PiSignOut  size={32} />
        </Link>
      </div>

      
    </Container>
  );
}