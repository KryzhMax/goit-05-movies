import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionContainer = styled.div`
  padding: 20px 50px;
`;

export const LogoStyled = styled(NavLink)`
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: green;
  }
`;
