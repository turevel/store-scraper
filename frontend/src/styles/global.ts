import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
