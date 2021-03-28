import React, { useState } from "react";
import styled from "styled-components";
import AllHeroesTable from "./AllHeroesTable";

const ListSectionWrapper = styled.section`
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ListSectionTitleWrapper = styled.div`
  font-family: var(--title-font);
  color: var(--text-color);
  margin-bottom: var(--section-margin);
  display: flex;
  align-items: baseline;
  h2 {
    text-decoration: underline;
    margin-right: 10px;
  }

  .heroes-amount {
    font-weight: 500;
    font-family: var(--primary-font);
  }

  @media (max-width: 1024px) {
    .heroes-amount {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto var(--section-margin) auto;
    width: 90%;
    font-size: 14px;

    .heroes-amount {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 13px;
    .heroes-amount {
      font-weight: 400;
    }
  }

  @media (max-width: 320px) {
    font-size: 12px;

    .heroes-amount {
      font-size: 10px;
    }
  }
`;

export default function ListSection() {
  const [HeroesAmount, setHeroesAmount] = useState();
  return (
    <ListSectionWrapper>
      <ListSectionTitleWrapper>
        <h2>All Missing Heroes </h2>
        <span className="heroes-amount">
          {HeroesAmount ? `(${HeroesAmount.toLocaleString()})` : null}
        </span>
      </ListSectionTitleWrapper>
      <AllHeroesTable setHeroesAmount={setHeroesAmount}></AllHeroesTable>
    </ListSectionWrapper>
  );
}
