import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};
  }
`;
