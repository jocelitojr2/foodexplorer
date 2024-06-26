import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto max-content;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`

export const Content = styled.main`
  width: 100vw;
  padding: 44px 28px 54px 24px;

  .back-button {
    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-size: 16px;
    margin-bottom: 16px;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 44px 124px 54px 124px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img { 
    width: 16.5rem;
    height: 16.5rem;
  }

  .dish-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 24px;
    margin-top: 16px;

    h2 {
      font-family: "Poppins";
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    P {
      font-family: "Poppins";
      font-size: 1.2rem;
      font-weight: 400;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .dish-tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
      margin-bottom: 48px;
    }

    .dish-options {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 16px;
      width: 100%;
  
      button {
        height: 100%;
        width: 188px;
      }

      .button-edit {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 48px;
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        padding: 12px 24px;
        border-radius: 5px;
      }
    }

    
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;

    img { 
      width: 24.37rem;
      height: 24.37rem;
      margin-right: 47px;
    }

    .dish-information {
      align-items: start;

      h2 {
        font-size: 2rem;
      }

      P {
        font-size: 1.2rem;
        text-align: start;
      }

      .dish-tags {
        justify-content: start;
        margin-bottom: 24px;
      }

      .dish-options {
        justify-content: start;
        gap: 33px;

        .button-edit {
          width: 132px;
        }

        .button-include svg {
          display: none;
        }
      }
    }
  }
`