import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0 0 0 / 12%);
  display: flex;
  overflow: hidden;
`;

export const Input = styled.input`
  height: 40px;
  padding-inline: 14px;
  width: 340px;
`;

export const Submit = styled.button`
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  color: ${({ theme }) => theme.colors.fontLight};
  display: grid;
  height: 40px;
  place-items: center;
  width: 60px;

  & .icon {
    font-size: 15px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentTertiary};
  }
`;
