import React from 'react';
import styled from 'styled-components';
import { FiPhoneForwarded, FiMail } from 'react-icons/fi';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineLike,
} from 'react-icons/ai';
const Contact = () => {
  return (
    <ContactContainer>
      <ContactInfo>
        <h1>Skontaktuj się z nami</h1>
        <h2>
          <FiMail />
          Email
        </h2>
        <a href='mailto:kayak.biuro@kayak.pl'>kayak.biuro@kayak.pl</a>
        <h2>
          <FiPhoneForwarded />
          Telefon
        </h2>
        <a href='tel:+48944449994'>944-449-994</a>
        <h2>
          <AiOutlineLike />
          Odwiedź nas na:
        </h2>
        <SocialMediaWrapper>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiOutlineTwitter />
        </SocialMediaWrapper>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
`;
const ContactInfo = styled.div`
  background-color: #fff;
  padding: 2em;
  display: flex;
  flex-direction: column;
  > h1 {
    border-bottom: ${({ theme }) => `4px solid ${theme.primaryDark}`};
    margin-bottom: 1em;
  }
  > h2 {
    display: flex;
    align-items: center;
    font-size: 1.6em;
    > svg {
      margin-right: 0.5em;
    }
  }
  > a {
    color: ${({ theme }) => theme.secondaryLight};
    background-color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    padding: 0.25em;
    font-size: 1.4em;
    margin-bottom: 0.5em;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;

  > svg {
    font-size: 2.2em;
  }
`;
