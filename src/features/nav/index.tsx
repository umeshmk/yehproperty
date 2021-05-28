// import React from "react";
import styled from "styled-components";
import logo from "./img/pin.svg";
import shortlist from "./img/list-heart.svg";

interface IProps {
  className?: string;
}

// Link
const Link = styled.li`
  color: red;
  color: ${(props) => props.theme.colors.a};
`;

// logo
const Logo = styled.a.attrs((props) => {
  return { href: props.href };
})`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h2};
  text-decoration: none;
  & span {
    color: ${(props) => props.theme.colors.b};
    font-weight: 100;
  }
`;

let body = ({ className }: IProps) => {
  return (
    <nav className={className}>
      <div className="logo">
        <img src={logo} alt="" />
        <Logo href="/">
          <span>Yeh</span>property<span>.com</span>
        </Logo>
      </div>
      <ul className="links">
        <Link>
          <img src={shortlist} alt="shorlist" title="shortlist" />
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
