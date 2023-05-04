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

  &[data-expand=true] {
    transform: translateX(0);
  }
`;

export const Settings = styled.button`
  background-color: transparent;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
  display: grid;
  height: 35px;
  place-items: center;
  position: relative;
  width: 35px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Switcher = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font};
  border-radius: 4px;
  column-gap: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 6px;

  &[data-lights-on=true] > span {
    background-color: ${({ theme }) => theme.colors.accentSecondary};

    & > span {
      transform: translateX(100%);
    }
  }
`;

export const Slider = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  height: 20px;
  padding-inline: 1px;
  width: 38px;
`;

export const SliderThumb = styled.span`
  background-color: ${({ theme }) => theme.colors.fontLight};
  border-radius: 50%;
  cursor: pointer;
  height: 18px;
  transition: transform ease-in-out 100ms;
  width: 18px;
`;
