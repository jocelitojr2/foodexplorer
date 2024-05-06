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
`;

export const Content = styled.main`
  width: 100vw;
  padding: 10px 28px 53px 24px;

  .back-button {
    display: flex;
    align-items: center;
    font-family: "Poppins";
    font-size: 16px;
    margin-bottom: 24px;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: none;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 10px 124px 53px 124px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 32px;
  }

  .separator {
    display: flex;
    flex-direction: column;
    gap: 16px;

    span:first-child {
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
  }

  .upload-file {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 12px 32px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    cursor: pointer;

    > span {
      font-family: "Poppins";
      font-weight: 500;
      margin-left: 8px;
    }

    > input {
      display: none;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  .select {
    position: relative;

    select {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      border: 0;
      font-size: 1rem;

      padding: 12px 14px;
  
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
  
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;

      option {
        padding: 10px 0;
      }
  
      &:focus-visible {
        outline: none;
      }
    }

    svg {
      position: absolute;
      right: 14px;
      top: 30%;
    }
  }

  .dish-ingredients {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 8px;
    padding: 8px;
  }

  .action-buttons {
    display: flex;
    gap: 32px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .action-buttons {
      justify-content: end;
      
      button {
        width: auto;
      }
    }
  }
`