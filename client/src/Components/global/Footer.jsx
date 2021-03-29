import React from "react";
import styled from "styled-components";
import burmaFlag from "../../assets/burma-flag-down.png";

const FooterWrapper = styled.footer`
  height: 75px;
  background: var(--blue-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--section-margin);
  position: relative;
`;

const FooterStyles = styled.div`
  font-family: var(--primary-font);
  color: var(--text-color);

  a {
    color: var(--text-color);
    font-weight: 500;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
  }
`;

const FlagWrapper = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;

  img {
    width: 300px;
    height: 300px;
    display: block;
  }

  @media (max-width: 1024px) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 175px;
      height: 175px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterStyles>
        All data are retrieve from{" "}
        <a href="https://aappb.org/" target="_blank" rel="noopener noreferrer">
          AAPP
        </a>{" "}
        PDF
      </FooterStyles>
      <FlagWrapper>
        <img src={burmaFlag} alt="flag-footer" />
      </FlagWrapper>
    </FooterWrapper>
  );
}
