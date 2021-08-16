import React from 'react';
import styled from 'styled-components';

const allowedTime = [
  '6:30',
  '8:30',
  '10:00',
  '11:30',
  '13:00',
  '14:30',
  '15:15',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
];

const TimePicker = ({ pickedTime, setPickedTime }) => {
  return (
    <TimePickerWrapper>
      {allowedTime.map((time) => (
        <TimeBox
          onClick={() => setPickedTime(time)}
          isPicked={pickedTime === time ? 1 : 0}
        >
          {time}
        </TimeBox>
      ))}
    </TimePickerWrapper>
  );
};

export default TimePicker;

const TimePickerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  grid-gap: 2px;
`;
const TimeBox = styled.span`
  border: ${({ theme }) => `1px solid ${theme.primaryDark}`};
  text-align: center;
  font-size: 1.2em;
  padding: 5px 0;
  background-color: ${({ theme, isPicked }) =>
    isPicked ? theme.secondaryLight : '#fff'};
  color: ${({ theme }) => theme.primaryDark};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.secondaryDark};
  }
`;
