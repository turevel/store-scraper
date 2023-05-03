import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::selection {
    background-color: ${({ theme }) => theme.colors.accentTertiary};
    color: ${({ theme }) => theme.colors.fontLight};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};
  }
`;
