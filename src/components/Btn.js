import React from 'react';
import styled from 'styled-components';

const Btn = ({ children, secondary, ...rest }) => {
  return (
    <StyledButton secondary={secondary ? 1 : 0} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Btn;

const StyledButton = styled.button`
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.primaryDark : theme.secondaryLight};
  color: ${({ theme, secondary }) =>
    secondary ? theme.secondaryLight : theme.primaryDark};
  border: none;
  padding: 0.5em 2em;
  font-weight: 700;
  font-size: 1.2em;
  transition: all 0.2s ease-in-out;
  :hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.primaryDark};
    background-color: #fff;
    cursor: pointer;
  }
`;
