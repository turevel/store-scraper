import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.fontLight};
  display: grid;
  place-items: center;
  position: relative;
  transition: height ease-in-out 200ms;
  flex-shrink: 0;
`;

export const SearchContainer = styled.section`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 125px;
  justify-content: space-between;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 20px);
`;

export const Logo = styled.h1`
  align-items: center;
  column-gap: 10px;
  display: flex;
  font-size: 2.3rem;
`;

