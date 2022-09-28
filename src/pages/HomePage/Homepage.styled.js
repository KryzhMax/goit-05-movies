import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 20px;
  row-gap: 30px;
  margin: 30px 0;
  padding-left: 0;
`;

export const ItemStyled = styled.li`
  max-width: 280px;
  flex-basis: calc((100% - (5) - 1) * 20px / 5);
  box-shadow: 0px 11px 15px -1px rgba(161, 161, 161, 0.64);
  transition: transform 300ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const PStyled = styled.p`
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #020202;
`;
