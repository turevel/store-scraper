import styled from 'styled-components';

export const Select = styled.select`
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0 0 0 / 12%);
  color: ${({ theme }) => theme.colors.fontLight};
  cursor: pointer;
  height: 30px;
  padding-inline: 5px;
  width: 120px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentTertiary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.font};
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font};
`;
