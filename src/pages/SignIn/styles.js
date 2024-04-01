import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  padding: 65px;

  > .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 38px;

    img {
      width: 43px;
      height: 43px;
    }

    h1 {
      font-size: 1.8rem;
      font-family: "Roboto";
      font-weight: bold;

      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;

    h1 {
      font-size: 2.31rem;
    }

    > .logo {
      width: 100%;
      justify-content: start;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  > label {
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
      font-size: 1rem;
      font-family: "Roboto";
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    
  }

  > a {
    font-family: "Poppins";
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  > h2 {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 64px;
    border-radius: 16px;

    h2 {
      display: block;
      font-size: 2rem;
      font-family: "Poppins";
      font-weight: 500;
      text-align: center;
    }
  }
`