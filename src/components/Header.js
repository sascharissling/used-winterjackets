import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  height: 70px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
`;

const Logo = styled.h1`
  font-size: 1.7rem;
  line-height: 2rem;
  color: #333;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Used Winterjackets</Logo>
    </HeaderContainer>
  );
}
