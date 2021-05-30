// import React from "react";
import styled from "styled-components";
// import logo from "./img/pin.svg";
// import shortlist from "./img/list-heart.svg";
import { IStyled } from "../../types";

// Link
const Link = styled.li`
  color: ${(props) => props.theme.colors.b};
  font-size: ${(props) => props.theme.size.h4};
  font-weight: 300;
`;

// logo
const Logo = styled.a.attrs((props) => {
  return { href: props.href };
})`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h3};
  font-family: ${(props) => props.theme.family.a};
  text-decoration: none;
  /* font-style: italic; */
  & span {
    font-family: ${(props) => props.theme.family.b};
    color: ${(props) => props.theme.colors.b};
    font-weight: 100;
  }
`;

let body = ({ className }: IStyled) => {
  return (
    <nav className={className}>
      <div className="logo">
        {/* <img src={logo} alt="" />
        <i className="far fa-heart fa-2x" aria-hidden="true"></i> */}
        <i className="fas fa-map-marker-alt fa-3x"> </i>
        <Logo href="/">
          <span>Yeh</span>property
          <span>{/* <small>.com</small> */}</span>
        </Logo>
      </div>
      <ul className="links">
        <Link>
          {/* <img src={shortlist} alt="shorlist" title="shortlist" /> */}
          <i className="far fa-heart fa-lg" aria-hidden="true"></i>
        </Link>
        <Link>Project</Link>
        <Link>Buy</Link>
        <Link>Rent</Link>
        <Link>Login</Link>
      </ul>
    </nav>
  );
};

const Nav = styled(body)`
  position: absolute;
  top: 0;
  left: 0;
  /* height: 5vh; */
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid; */
  padding: 0.3rem 0;
  & .logo {
    display: flex;
    align-items: center;
    /* border: 1px solid; */
  }
  & i {
    color: ${(props) => props.theme.colors.a};
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  & .links {
    /* border: 1px solid; */
    display: flex;
    & li {
      padding: 0 1rem;
    }
    & img {
      width: 2rem;
    }
  }
`;

export default Nav;
