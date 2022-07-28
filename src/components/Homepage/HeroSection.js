import React from "react";
import styled from "styled-components";
import BtnLink from "../BtnLink";
import bgImage from "../../assets/homeBg.jpg";

const HeroSection = () => {
  return (
    <HeroWrap style={{ backgroundImage: `url(${bgImage})` }}>
      <HeroContent>
        <HeroColumn>
          <h1>Spływy Kajakowe Dunajcem</h1>
          <p>Zarezerwuj online przez prosty formularz.</p>
          <BtnLink to="rezerwacja">Rezerwacja</BtnLink>
        </HeroColumn>
      </HeroContent>
    </HeroWrap>
  );
};

export default HeroSection;

const HeroWrap = styled.section`
  display: flex;
  min-height: 500px;
  background-size: cover;
  background-position-y: 70%;
  background-position-x: center;
  @media screen and (max-width: 768px) {
    padding-top: 5em;
  }
  box-shadow: ${(props) => props.theme.shadowMd};
  border-bottom: ${({ theme }) => `1rem solid ${theme.primaryLight}`};
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  > h1 {
    text-transform: uppercase;

    font-size: 3rem;
    color: #fff;
  }
  > p {
    padding: 2rem 0;
    font-size: 1.4rem;
    color: #fff;
    max-width: 400px;
  }
`;
