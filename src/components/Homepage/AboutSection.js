import React from "react";
import styled from "styled-components";
import { FaRoute } from "react-icons/fa";

const AboutSection = () => {
  return (
    <AboutWrap>
      <h2>
        Dostępne trasy
        <FaRoute />
      </h2>
      <RoutesContainer>
        <Route>
          <h3>Doliboz - Kucjat</h3>
        </Route>
      </RoutesContainer>
    </AboutWrap>
  );
};

export default AboutSection;

const AboutWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 1rem 0;
  > h2 {
    font-size: 2.2rem;
    > svg {
      margin-left: 1rem;
      color: ${(props) => props.theme.secondaryLight};
    }
  }
`;

const RoutesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Route = styled.div`
  display: flex;
  flex-direction: column;
`;
