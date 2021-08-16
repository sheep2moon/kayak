import React, { useEffect, useState } from 'react';
import CanoePicker from './CanoePicker';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { GiWoodCanoe } from 'react-icons/gi';
import { BsFillClockFill } from 'react-icons/bs';
import { BsCalendar } from 'react-icons/bs';
import { addDays, format } from 'date-fns';
import styled from 'styled-components';
import Btn from '../../Btn';

const FirstStep = ({ setStep }) => {
  const [pickedDate, setPickedDate] = useState(
    format(addDays(new Date(), 1), 'yyyy-MM-dd')
  );
  const [pickedTime, setPickedTime] = useState('7:00');
  const [pickedCanoes, setPickedCanoes] = useState([1]);
  const [totalPrice, setTotalPrice] = useState(20);

  useEffect(() => {
    const total = pickedCanoes.reduce((prevValue, currValue) => {
      const price = currValue === 1 ? 20 : 30;
      return prevValue + price;
    }, 0);
    setTotalPrice(total);
  }, [pickedCanoes]);

  return (
    <FormContainer>
      <h2>Sczegóły rezerwacji</h2>
      <h3>
        <CalendarIcon />
        Dzień
      </h3>
      <DatePicker pickedDate={pickedDate} setPickedDate={setPickedDate} />
      <h3>
        <ClockIcon />
        Godzina
      </h3>
      <TimePicker pickedTime={pickedTime} setPickedTime={setPickedTime} />
      <h3>
        <CanoeIcon />
        Kajaki
      </h3>
      <CanoePicker
        pickedCanoes={pickedCanoes}
        setPickedCanoes={setPickedCanoes}
      />
      <BottomBar>
        <p>Łącznie: {totalPrice} zł</p>
        <Btn onClick={() => setStep(2)}>Dalej</Btn>
      </BottomBar>
    </FormContainer>
  );
};

export default FirstStep;

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
  > h3 {
    font-size: 1.6em;
    padding: 0.25em 0;
    color: ${({ theme }) => theme.primaryDark};
    border-bottom: ${({ theme }) => `3px solid ${theme.primaryLight}`};
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
`;

const BottomBar = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2px;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};

  > p {
    color: ${({ theme }) => theme.secondaryLight};
    padding-left: 1em;
    font-size: 1.2em;
  }
`;

const CanoeIcon = styled(GiWoodCanoe)`
  width: 2em;
`;
const ClockIcon = styled(BsFillClockFill)`
  width: 2em;
`;
const CalendarIcon = styled(BsCalendar)`
  width: 2em;
`;
