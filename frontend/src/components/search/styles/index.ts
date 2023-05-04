import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0 0 0 / 12%);
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font};
  height: 40px;
  padding-left: 14px;
  padding-right: 38px;
  width: calc(100% - 60px);
`;

export const Clear = styled.button`
  background-color: transparent;
  border-radius: 50%;
  color: ${({ theme }) => `${theme.colors.font}a6`};
  display: none;
  height: 32px;
  place-items: center;
  position: absolute;
  right: 64px;
  width: 32px;

  &[data-active=true] {
    display: grid;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.quaternary};
  }
`;

export const Submit = styled.button`
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  color: ${({ theme }) => theme.colors.fontLight};
  display: grid;
  height: 40px;
  place-items: center;
  width: 60px;

  & .icon {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentTertiary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.font};
    cursor: not-allowed;
  }
`;
