import React, { useEffect } from "react";
import styled from "styled-components";
import { IStyled } from "../../types";
// import bg from "./img/bg1.jpg";
import bg from "./img/bg3.jpg";
import Search from "./Search";

const Direction = styled.div`
  font-size: ${(props) => props.theme.size.h1};
  font-family: ${(props) => props.theme.family.c};
  font-weight: 100;
  /* font-style: italic; */
  color: ${(props) => props.theme.colors.c};
  z-index: 10;
  /* background-color: #fff;
  background-color: rgba(255, 255, 255, 0.7); */
  padding: 0 5rem;

  & span {
    font-family: ${(props) => props.theme.family.c};
    /* color: ${(props) => props.theme.colors.a}; */
    /* font-weight: 400; */
  }
`;

const body = ({ className }: IStyled) => {
  return (
    <header className={className}>
      <Direction>
        Get directions to your new
        <span> Home</span>
      </Direction>
      <Search />
    </header>
  );
};

const Header = styled(body)`
  /* border: 1px solid; */
  /* height: 75vh; */
  height: 100vh;
  background-image: url(${bg});
  background-position: 0 30%;
  /* box-shadow: inset 0 -50em 100em rgba(0, 0, 0, 0.55); */
  box-shadow: inset 0 -50em 100em ${(props) => props.theme.colors.a + "99"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Header;
