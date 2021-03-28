import React from "react";
import burmaFlag from "../assets/burma-flag-up.png";
import {
  HeaderWrapper,
  HeaderStyles,
  FlagWrapper,
} from "../style/HeaderStyles";

export default function HeaderSection() {
  return (
    <HeaderWrapper>
      <HeaderStyles>
        <h1 className="main-title">
          <span className="missing">Missing</span>{" "}
          <span className="heroes">Heroes</span>{" "}
          <span className="myanmar">Myanmar</span>
        </h1>
        <div className="donate-link">
          <a
            href="https://www.facebook.com/100917078746077/posts/110415467796238/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>{" "}
          to support fallen heroes' family.
        </div>
        <div className="hashtags">
          <span className="hashtag">#SaveMyanmar</span>
          <span className="hashtag">#MissingHeroes</span>
        </div>
      </HeaderStyles>
      <FlagWrapper>
        <img src={burmaFlag} alt="flag-header" />
      </FlagWrapper>
    </HeaderWrapper>
  );
}
