import { useState } from "react";
import { PiReceipt, PiListLight } from "react-icons/pi";

import { Container } from "./styles";
import { MenuMobile } from "../MenuMobile";

import favIcon from "../../assets/logo.svg"

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      
      <PiListLight size={42} onClick={() => setMenuIsVisible(true)} />

      <a href="/" className="logo">
        <img src={favIcon} alt="Logo foodexplorer" />
        <span>
          food explorer
        </span>
      </a>

      <a href="#" className="cart">
        <PiReceipt size={42} />
        <span>1</span>
      </a>

      
    </Container>
  );
}