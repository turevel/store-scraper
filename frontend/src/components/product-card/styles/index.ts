import styled from 'styled-components';

export const Card = styled.li`
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  list-style-type: none;
  overflow: hidden;
  transition: transform ease-in-out 50ms;
  width: 250px;
`;

export const ImageContainer = styled.div`
  background-color: #fff;
  display: grid;
  padding-block: 8px;
  place-items: center;
`;

export const Image = styled.img`
  height: 150px;
`;

export const Title = styled.h2`
  flex-grow: 1;
  font-size: 1.1rem;
  max-height: 200px;
  overflow: hidden;
  padding: 12px 8px;
  text-overflow: ellipsis;
`;

export const PriceAndCompanyContainer = styled.div`
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accentSecondary};
  border-top: 2px solid ${({ theme }) => theme.colors.accentSecondary};
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
`;

export const Company = styled.span`
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.fontLight};
  display: grid;
  font-size: .85rem;
  height: 25px;
  padding-inline: 8px;
  place-items: center;
  width: fit-content;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.accentSecondary};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Link = styled.a`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.accentSecondary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.fontLight};
  font-weight: 600;
  font-size: .8rem;
  margin-block: 20px;
  padding: 8px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentTertiary};
  }
`;
