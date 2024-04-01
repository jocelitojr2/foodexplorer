import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 8px;
  padding: 8px 16px;
  gap: 8px;
  height: 32px;

  > button {
    border: none;
    background: none;
    color: ${({ theme, $isNew }) => $isNew? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  }

  > input {
    width: 70px;

    background: transparent;
    border: none;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    font-weight: 500;

    &::placeholder {
      color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }
  }
`