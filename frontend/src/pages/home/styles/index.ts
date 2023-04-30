import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 10px rgba(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  min-height: max(100vh, 620px);
  min-width: 360px;
  position: relative;
`;
