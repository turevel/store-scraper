import styled from 'styled-components';

export const Card = styled.li`
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0 5px rgba(0 0 0 / 12%);
  width: 240px;
  transition: transform ease-in-out 50ms;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;

  &:hover {
    transform: scale(1.01);

    & .title {
      overflow: visible;
      white-space: normal;
    }
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  place-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-block: 8px;
  background-color: #fff;
`;

export const Image = styled.img`
  height: 150px;
`;

export const Title = styled.h2`
  padding: 12px 8px;
  font-size: 1.1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: overflow ease-in-out 1s;
`;

export const PriceAndCompanyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  border-top: 2px solid ${({ theme }) => theme.colors.accentSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentSecondary};
`;

export const Company = styled.span`
  display: grid;
  color: ${({ theme }) => theme.colors.fontLight};
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  height: 25px;
  place-items: center;
  width: fit-content;
  padding-inline: 8px;
  font-size: .85rem;
  border-radius: 25px;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentSecondary};
`;

export const Link = styled.a`
  align-self: center;
  margin-block: 20px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  color: ${({ theme }) => theme.colors.fontLight};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8rem;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentTertiary};
  }
`;
