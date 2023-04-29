import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.fontLight};
  display: grid;
  place-items: center;
  position: relative;
  height: 160px;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 2.3rem;
`;

export const SearchContainer = styled.section`
  bottom: 0;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
`;
