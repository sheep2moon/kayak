import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to='/'>
        <h1>KAYAK</h1>
      </Logo>

      <NavWrapper>
        <NavLinks />
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  height: 4rem;
  box-shadow: 0 5px 5px #00000020;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Bahianita', cursive;
  @media print {
    visibility: hidden;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryDark};
  margin: 0 1rem;
  > h1 {
    font-size: 3em;
  }
`;
const NavWrapper = styled.nav`
  margin-left: auto;
  margin-right: 1rem;
`;
