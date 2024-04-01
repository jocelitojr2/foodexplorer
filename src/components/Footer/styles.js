import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  gap: 8px;

  padding: 30px 28px;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 30px 124px;
  }

  > .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    filter: grayscale(1);

    span {
      font-size: 1.5rem;
      font-family: "Roboto";
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }
`