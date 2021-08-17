import React from 'react';
import styled from 'styled-components';
import bgImage from '../assets/homeBg.jpg';
import BtnLink from '../components/BtnLink';

const Homepage = () => {
  return (
    <HomepageContainer style={{ backgroundImage: `url(${bgImage})` }}>
      <HeroSection>
        <h1>Spływy Kajakowe</h1>
        <p>
          Firma KAYAK zajmuje się organizacją spływów kajakowych Dunajcem.
          Zarezerwuj online przez prosty formularz.
        </p>
        <BtnLink to='rezerwacja'>Rezerwacja</BtnLink>
      </HeroSection>
    </HomepageContainer>
  );
};

export default Homepage;

const HomepageContainer = styled.main`
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  color: ${({ theme }) => theme.primaryDark};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
  @media screen and (max-width: 768px) {
    padding-top: 5em;
  }
  > h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 3em;
    color: #fff;
    border-bottom: ${({ theme }) => `4px solid ${theme.secondaryLight}`};
  }
  > p {
    margin: 1em 2em 2em 2em;
    font-size: 1.4em;
    color: #fff;
    max-width: 400px;
  }
`;
