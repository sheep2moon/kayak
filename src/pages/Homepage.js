import React from "react";
import styled from "styled-components";

import AboutSection from "../components/Homepage/AboutSection";
import HeroSection from "../components/Homepage/HeroSection";

const Homepage = () => {
  return (
    <HomepageContainer>
      <HeroSection />
      <ContentWrapper>
        <AboutSection />
      </ContentWrapper>
    </HomepageContainer>
  );
};

export default Homepage;

const HomepageContainer = styled.main`
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
  color: ${({ theme }) => theme.primaryDark};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  background-color: ${({ theme }) => theme.primaryDark};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
