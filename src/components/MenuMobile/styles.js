import styled, { css } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 2;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  opacity: 0;
  pointer-events: none;

  transition: .5s;
  transform: translateY(50px);

  > svg {
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
    width: 100%;
    height: 100%;
    padding: 36px 28px 13px 28px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      li {
        padding: 10px;

        a {
          font-size: 1.5rem;
          font-weight: 300;
          color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
      }
    }

    li:last-child {
      border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    }
  }

  ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}

  > .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(105px + 31.6px);
    gap: 1rem;
    padding: 0 28px;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`;