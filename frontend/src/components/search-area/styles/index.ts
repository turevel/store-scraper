import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  color: ${({ theme }) => theme.colors.fontLight};
  display: grid;
  place-items: center;
  position: relative;
  transition: height ease-in-out 250ms;
  flex-shrink: 0;
`;

export const SearchContainer = styled.section`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 30px);
  width: min(100% - 40px, 400px);
`;

