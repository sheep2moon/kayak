import React from 'react';
import styled from 'styled-components';
import Btn from '../../Btn';

const SecondStep = ({ setStep }) => {
  return (
    <FormContainer>
      <h2>Dane Personalne</h2>
      <StyledForm>
        <StyledLabel htmlFor='firstname'>Imie</StyledLabel>
        <StyledInput maxWidth='18ch' name='firstname' type='text' />
        <StyledLabel htmlFor='secondname'>Nazwisko</StyledLabel>
        <StyledInput maxWidth='24ch' name='secondname' type='text' />
        <StyledLabel htmlFor='phone-number'>Telefon</StyledLabel>
        <StyledInput maxWidth='14ch' name='phone-number' type='text' />
      </StyledForm>
      <BottomBar>
        <Btn onClick={() => setStep(1)}>Wstecz</Btn>
        <Btn onClick={() => setStep(1)}>Zakończ</Btn>
      </BottomBar>
    </FormContainer>
  );
};

export default SecondStep;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 0.5em 2em 1em 2em;
  border-radius: 0.5rem;
  > h2 {
    text-align: center;
    font-size: 2em;
    margin: 0;
    background-color: ${({ theme }) => theme.primaryDark};
    color: #fff;
    border-radius: 0.5rem;
  }
`;

const StyledForm = styled.form`
  width: 28em;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-top: 1em;
`;
const StyledInput = styled.input`
  border: none;
  font-size: 1.4em;
  max-width: ${({ maxWidth }) => maxWidth};
  border-bottom: ${({ theme }) => `2px solid ${theme.primaryDark}`};
  padding: 0.25em 0.25em;
  outline: none;
`;

const BottomBar = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2px;
  padding: 2px;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;
