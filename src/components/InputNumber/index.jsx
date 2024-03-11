import { useState } from "react";
import { Container } from "./styles";

import { PiPlusLight, PiMinus  } from "react-icons/pi";

export function InputNumber() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    if (counter < 50) {
      setCounter(counter + 1);
    }
  }

  function handleDecrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function handleChange(event) {
    const value = event.target.value;

    if (value > 1 && value <= 50) { 
      setCounter(value === '' ? 0 : Number(value));
    }
  }

  function formatNumber(number) {
    return number < 10 ? `0${number}` : number.toString();
  }
  
  return (
    <Container>
      <PiPlusLight size={32} onClick={() => handleIncrement()} />
      <input 
        type="number" 
        placeholder="00" 
        value={formatNumber(counter)}
        onChange={handleChange}
      />
      <PiMinus size={32} onClick={() => handleDecrement()} />
    </Container>
  )
}