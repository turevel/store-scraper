import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50%;
  background-color: blue;
  display: grid;
  place-items: center;
`;

export const Logo = styled.h1`
  transform: translateY(-50%);
`;

export const SearchContainer = styled.section`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;
