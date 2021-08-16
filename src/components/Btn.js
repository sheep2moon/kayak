import React from 'react';
import styled from 'styled-components';

const Btn = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Btn;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.secondaryLight};
  color: ${({ theme }) => theme.primaryDark};
  border: none;
  padding: 0.5em 2em;
  font-weight: 700;
  font-size: 1.2em;
  :hover {
    background-color: #fff;
    cursor: pointer;
  }
`;
