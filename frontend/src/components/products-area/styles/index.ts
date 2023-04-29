import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Message = styled.p`
  font-size: .9rem;
  color: ${({ theme })=> theme.colors.accentSecondary};
  margin-block: 20px;
  text-align: center;
  font-style: italic;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 12px;
`;
