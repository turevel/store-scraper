import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 0 0 10px rgba(0 0 0 / 12%);
  column-gap: 5px;
  display: flex;
  right: 0;
  padding: 5px;
  position: absolute;
  top: 10px;
  transform: translateX(calc(100% - 45px));
  transition: transform ease-in-out 100ms;
  z-index: 9999;

  &:has(#switch-expand:checked) {
    transform: translateX(0);
  }
`;

export const SettingsLabel = styled.label`
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.font};
  display: grid;
  height: 35px;
  place-items: center;
  position: relative;
  width: 35px;

  & > input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ThemesContainer = styled.div`
  & label {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.font};
    border-radius: 4px;
    column-gap: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 6px;

    & > input {
      cursor: pointer;
      opacity: 0;
      position: absolute;
    }

    &:has(input:checked) > .slider {
      background-color: ${({ theme }) => theme.colors.accentSecondary};

      & > .slider-thumb {
        transform: translateX(100%);
      }
    }
  }

  & .slider {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 18px;
    width: 38px;
    display: flex;
    height: 20px;
    padding-inline: 1px;
    cursor: pointer;
  }

  & .slider-thumb {
    background-color: ${({ theme }) => theme.colors.fontLight};
    border-radius: 50%;
    cursor: pointer;
    height: 18px;
    transition: transform ease-in-out 100ms;
    width: 18px;
  }
`;
