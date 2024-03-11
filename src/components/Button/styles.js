import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 3rem;
  border: 0;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-family: "Poppins";
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

`;