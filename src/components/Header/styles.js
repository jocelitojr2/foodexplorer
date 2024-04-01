import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 28px;
  
  > .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      display: flex;
      width: max-content;
      font-size: 1.5rem;
      font-family: "Roboto";
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > .cart {
    position: relative;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: -4px;
      width: 20px;
      height: 20px;
      font-size: 0.875rem;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 100%;
      padding: 2px;
    }
  }

  .desktop-search {
    display: none;
  }

  .desktop-components {
    display: none;
  }

  .cart-desktop {
    display: none;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 12px 46.5px;
    border-radius: 8px;
    
    svg {
      margin-right: 8px;
    }

    span {
      font-family: "Poppins";
      font-size: 0.875rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 124px;
    gap: 32px;

    .icon-menu-mobile,
    .cart {
      display: none;
    }

    .desktop-search {
      display: flex;
      width: 100%;
    }

    .desktop-components {
      display: flex;
      align-items: center;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .cart-desktop {
      display: flex;
      margin-right: 32px;
    }
  }
`;