import React, { useState } from 'react';
import styled from 'styled-components';
import FirstStep from '../components/Booking/FirstStep/FirstStep';
import SecondStep from '../components/Booking/SecondStep/SecondStep';

const Booking = () => {
  const [step, setStep] = useState(1);
  return (
    <BookingContainer>
      <BookingFormContainer>
        {step === 1 ? (
          <FirstStep setStep={setStep} />
        ) : (
          <SecondStep setStep={setStep} />
        )}
      </BookingFormContainer>
    </BookingContainer>
  );
};

export default Booking;

const BookingContainer = styled.main`
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const BookingFormContainer = styled.section``;
