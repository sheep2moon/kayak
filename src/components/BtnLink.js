import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnLink = ({ linkTo, children, ...rest }) => {
  return (
    <StyledLink to={linkTo} {...rest}>
      {children}
    </StyledLink>
  );
};

export default BtnLink;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 1.4em;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  border: 1px solid #00000030;
  width: fit-content;
  transition: all 0.2s ease-in-out;
  :hover {
    transition: all 0.2s ease-in-out;
    box-shadow: ${({ theme }) => `0 2px 3px 2px ${theme.primaryDark}`};
  }
`;
