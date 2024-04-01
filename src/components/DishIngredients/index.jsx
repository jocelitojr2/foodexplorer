import { PiPlusBold , PiX } from "react-icons/pi";

import { Container } from "./styles"

export function DishIngredients({ isNew, value, onClick, ...rest}) {
  return (
    <Container $isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        { isNew ? <PiPlusBold  /> : <PiX />}
      </button>
    </Container>
  )
}