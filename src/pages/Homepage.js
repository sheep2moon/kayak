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
          Organizujemy Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore, eligendi. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Natus, quam.
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
  > h1 {
    text-transform: uppercase;
    font-size: 3em;
    color: #fff;
    border-bottom: ${({ theme }) => `4px solid ${theme.secondaryLight}`};
  }
  > p {
    text-align: center;
    font-size: 1.4em;
    color: #fff;
    max-width: 400px;
    margin-bottom: 2em;
  }
`;
