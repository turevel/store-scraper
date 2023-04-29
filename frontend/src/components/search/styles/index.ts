import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 35px;
  box-shadow: 0 0 10px rgba(0 0 0 / 12%);
`;

export const Input = styled.input`
  width: 320px;
  height: 38px;
  padding-inline: 14px;
`;

export const Submit = styled.button`
  height: 38px;
  width: 50px;
  display: grid;
  place-items: center;

  & .icon {
    font-size: 15px;
  }
`;
