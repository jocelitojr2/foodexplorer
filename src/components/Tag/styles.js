import styled from "styled-components";

export const Container = styled.span`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`