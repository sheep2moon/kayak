import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Btn from '../Btn';

const Summary = ({ setStep }) => {
  const { date, time, canoes, totalPrice, personalData } = useSelector(
    (state) => state.booking
  );

  return (
    <SummaryContainer>
      <PrintOnlyInfo>
        <h2>KAYAK</h2>
        <h4>Podsumowanie rezerwacji z dnia {new Date().toLocaleString()}</h4>
      </PrintOnlyInfo>
      <h2>Podsumowanie rezerwacji</h2>
      <h3>Data</h3>
      <p>{`${time}, ${date}`}</p>
      <h3>Kajaki</h3>
      <CanoesList>
        {canoes.map((canoe, index) => (
          <li key={index}>{`${index + 1}. Kajak ${canoe} osobowy`}</li>
        ))}
      </CanoesList>
      <h3>Cena</h3>
      <p>{totalPrice.toFixed(2)}zł</p>
      <h3>Dane rezerwującego</h3>
      <p>
        {personalData.firstName} {personalData.secondName}
      </p>
      <p>{personalData.email}</p>
      <p>{personalData.phone}</p>
      <BottomBar>
        <Btn onClick={() => setStep(2)}>Wstecz</Btn>
        <Btn secondary onClick={() => window.print()}>
          Drukuj
        </Btn>
      </BottomBar>
    </SummaryContainer>
  );
};

export default Summary;

const SummaryContainer = styled.div`
  background-color: #fff;
  padding: 0.5em 2em 1em 2em;
  border-radius: 0.5rem;
  width: 32em;
  > h2 {
    text-align: center;
    font-size: 2em;
    margin: 0;
    background-color: ${({ theme }) => theme.primaryDark};
    color: #fff;
    border-radius: 0.5rem;
    margin-bottom: 1em;
    @media print {
      visibility: hidden;
    }
  }
  > h3 {
    display: inline-block;
    background-color: ${({ theme }) => theme.secondaryLight};
    padding: 0.25em;
    margin-top: 0.5em;
  }
  > p {
  }
`;
const PrintOnlyInfo = styled.div`
  display: none;
  @media print {
    display: block;
    > h2 {
      font-size: 6em;
      font-family: 'Bahianita', cursive;
      text-align: center;
    }
  }
`;
const CanoesList = styled.ul`
  list-style: none;
`;

const BottomBar = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2px;
  padding: 2px;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
  @media print {
    visibility: hidden;
  }
`;
