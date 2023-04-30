import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Message = styled.p`
  color: ${({ theme })=> theme.colors.accentSecondary};
  font-style: italic;
  font-size: .9rem;
  margin-block: 20px;
  text-align: center;
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;
