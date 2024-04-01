import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border: none;
`