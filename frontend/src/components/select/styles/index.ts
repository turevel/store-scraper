import styled from 'styled-components';

export const Select = styled.select`
  height: 30px;
  padding-inline: 5px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  color: ${({ theme }) => theme.colors.fontLight};
  cursor: pointer;
  width: 120px;
  box-shadow: 0 0 5px rgba(0 0 0 / 12%);

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentTertiary};
  }
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font};
`;
