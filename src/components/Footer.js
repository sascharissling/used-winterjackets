import React from "react";
import styled from "@emotion/styled";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const LinkName = styled(Link)`
  text-decoration: none;
`;

const FooterContainer = styled.footer`
  height: 70px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
`;

const MenuButton = styled.button`
  width: 33%;
  height: 100%;
  font-size: 1rem;
  background: transparent;
  color: #49d1cc;
  border: none;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  &:hover {
    color: grey;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <MenuButton>
        <AcUnitIcon />
        <LinkName to="/jackets">Jackets</LinkName>
      </MenuButton>
      <MenuButton>
        <AddCircleOutlineIcon />
        <LinkName to="/sell">Sell</LinkName>
      </MenuButton>
      <MenuButton>
        <AccountCircleIcon />
        <LinkName to="/profile">Profile</LinkName>
      </MenuButton>
    </FooterContainer>
  );
}
