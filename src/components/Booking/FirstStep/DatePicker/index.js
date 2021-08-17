import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingDate } from '../../../../redux/bookingSlice';

const DatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const date = useSelector((state) => state.booking.date);

  const pickDate = (date) => {
    dispatch(setBookingDate(format(date, 'yyyy-MM-dd')));
    toggleOpen();
  };
  return (
    <DatePickerContainer>
      <CalendarWrap isOpen={isOpen}>
        <Calendar pickDate={pickDate} />
      </CalendarWrap>
      <StyledInput value={date} readOnly={true} type='text' />
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
  margin: 0 auto;
  width: 28em;
`;
const CalendarWrap = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 10;
  top: 3em;
  outline: 2px solid #000;
`;
const StyledInput = styled.input`
  text-align: center;
  font-size: 1.2em;
  width: 14ch;
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
