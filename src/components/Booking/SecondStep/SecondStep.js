import React from 'react';
import styled from 'styled-components';
import Btn from '../../Btn';
import { BsFillPersonFill } from 'react-icons/bs';
import { ImPhone } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalData } from '../../../redux/bookingSlice';
import { useEffect } from 'react';

const SecondStep = ({ setStep }) => {
  const firstNameRef = useRef();
  const secondNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  const { firstName, secondName, email, phone } = useSelector(
    (state) => state.booking.personalData
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const collectedData = {
      firstName: firstNameRef.current.value,
      secondName: secondNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    dispatch(setPersonalData(collectedData));
    setStep(3);
  };

  useEffect(() => {
    firstNameRef.current.value = firstName;
    secondNameRef.current.value = secondName;
    emailRef.current.value = email;
    phoneRef.current.value = phone;
  }, []);

  const handleGoBack = () => {
    const collectedData = {
      firstName: firstNameRef.current.value,
      secondName: secondNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    dispatch(setPersonalData(collectedData));
    setStep(1);
  };

  return (
    <FormContainer>
      <h2>Dane Personalne</h2>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <StyledLabel htmlFor='fname'>
          <BsFillPersonFill /> Imie
        </StyledLabel>
        <StyledInput
          ref={firstNameRef}
          maxWidth='18ch'
          name='firstname'
          id='fname'
          type='text'
        />

        <StyledLabel htmlFor='sname'>
          <BsFillPersonFill />
          Nazwisko
        </StyledLabel>
        <StyledInput
          ref={secondNameRef}
          maxWidth='24ch'
          name='secondname'
          id='sname'
          type='text'
        />

        <StyledLabel htmlFor='email'>
          <GrMail />
          E-mail
        </StyledLabel>
        <StyledInput
          ref={emailRef}
          maxWidth='24ch'
          name='email'
          id='email'
          type='email'
        />

        <StyledLabel htmlFor='phone'>
          <ImPhone />
          Telefon
        </StyledLabel>
        <StyledInput
          ref={phoneRef}
          maxWidth='14ch'
          name='phone-number'
          id='phone'
          type='tel'
        />

        <BottomBar>
          <Btn onClick={handleGoBack}>Wstecz</Btn>
          <Btn secondary type='submit'>
            Podsumowanie
          </Btn>
        </BottomBar>
      </StyledForm>
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
    margin-bottom: 1em;
  }
`;

const StyledForm = styled.form`
  width: 28em;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const StyledLabel = styled.label`
  margin-top: 1em;
  font-size: 1em;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 0.5em;
  }
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
