import React from "react";
import styled from "styled-components";

const NavbarStyles = styled.nav`
  font-family: var(--primary-font);
  min-width: 35%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 30px;
  right: 50px;

  li {
    list-style-type: none;

    a {
      color: var(--text-color);
      text-decoration: none;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarStyles>
      <li>
        <a href="#">Missing Heroes</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
    </NavbarStyles>
  );
}
