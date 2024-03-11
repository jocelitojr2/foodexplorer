import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../styles/deviceBreakpoints"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 12px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto","Poppins",sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;