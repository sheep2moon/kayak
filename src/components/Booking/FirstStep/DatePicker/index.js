import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import { format } from 'date-fns';

const DatePicker = ({ pickedDate, setPickedDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const pickDate = (date) => {
    setPickedDate(format(date, 'yyyy-MM-dd'));
    toggleOpen();
  };
  return (
    <DatePickerContainer>
      <CalendarWrap isOpen={isOpen}>
        <Calendar pickDate={pickDate} />
      </CalendarWrap>
      <StyledInput value={pickedDate} readOnly={true} type='text' />
      <PickerWrap onClick={toggleOpen}>
        <p>Wybierz dzień</p>
      </PickerWrap>
    </DatePickerContainer>
  );
};

export default DatePicker;

const DatePickerContainer = styled.div`
  border: 1px solid #00000030;
  display: flex;
  position: relative;
  /* change font size to manipulate size of picker */
  width: 28em;
`;
const CalendarWrap = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 10;
  top: 3em;
`;
const StyledInput = styled.input`
  text-align: center;
  font-size: 1.2em;
  border: none;
`;
const PickerWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.secondaryLight};
  padding: 0.5rem;
  > p {
    font-size: 1.2em;
    font-weight: 700;
  }
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryLight};
  }
`;
