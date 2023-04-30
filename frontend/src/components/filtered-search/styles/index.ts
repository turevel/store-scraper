import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.font};
  column-gap: 5px;
  display: flex;
  padding: 15px;
`;

export const SelectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  & span {
    color: ${({ theme }) => theme.colors.fontLight};
    font-weight: 600;
    text-shadow: 0 0 5px rgba(0 0 0 / 12%);
  }
`;
