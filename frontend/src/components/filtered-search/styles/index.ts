import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  row-gap: 10px;
  align-items: center;
  column-gap: 5px;
  padding: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 5px;

  & span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.fontLight};
    text-shadow: 0 0 5px rgba(0 0 0 / 12%);
  }
`;
