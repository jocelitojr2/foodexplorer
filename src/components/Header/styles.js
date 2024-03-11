import styled from "styled-components";

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
      font-size: medium;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 100%;
      padding: 2px;
    }
  }
`;