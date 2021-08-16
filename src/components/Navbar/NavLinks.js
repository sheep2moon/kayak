import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = () => {
  return (
    <LinksList>
      <li>
        <NavLink to='/rezerwacja'>Zarezerwuj</NavLink>
      </li>
      <li>
        <NavLink to='/mapa'>Mapa</NavLink>
      </li>
      <li>
        <NavLink to='/kontakt'>Kontakt</NavLink>
      </li>
    </LinksList>
  );
};

export default NavLinks;

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  > li {
    padding: 0 0.5em;
  }
`;
const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.8em;
  color: ${({ theme }) => theme.primaryDark};
`;
