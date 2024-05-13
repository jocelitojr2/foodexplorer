import { useState } from "react";
import { Container } from "./styles";

import { PiPlusBold , PiMinusBold  } from "react-icons/pi";

export function InputNumber() {
  const [counter, setCounter] = useState(1);

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
      <PiMinusBold size={55} onClick={() => handleDecrement()} />
      <input 
        type="number" 
        placeholder="00" 
        value={formatNumber(counter)}
        onChange={handleChange}
      />
      <PiPlusBold  size={55} onClick={() => handleIncrement()} />
    </Container>
  )
}