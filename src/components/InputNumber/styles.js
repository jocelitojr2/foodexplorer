import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.5rem;

    text-align: center;
    padding: 12px 14px;
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;