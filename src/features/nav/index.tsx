import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IStyled, PropertyType } from "../../types";
import useClickOutside from "../../utility/useClickOutside";
import { useQuery } from "../../utility/useQuery";
import Links from "./Links";

const Logo = styled(Link)`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h3};
  font-family: ${(props) => props.theme.family.a};
  text-decoration: none;
  /* font-style: italic; */
  span {
    font-family: ${(props) => props.theme.family.b};
    color: ${(props) => props.theme.colors.b};
    font-weight: 100;
  }
`;

let Body = ({ className }: IStyled) => {
  const [showNav, setShowNav] = useState(false);
  const { ref, isVisible, setIsVisible } = useClickOutside(false);

  const query = useQuery();
  const activeType = query.get("type") as PropertyType["type"];

  const handleClick = () => {
    setShowNav(!showNav);
  };

  // Mobile only - close links after a click outside
  useEffect(() => {
    if (showNav) setIsVisible(true);
  }, [showNav, setIsVisible]);

  useEffect(() => {
    if (!isVisible) setShowNav(false);
  }, [isVisible]);

  // Mobile only - close links after a clicking (project/buy/rent) inside nav
  useEffect(() => {
    setShowNav(false);
  }, [activeType]);

  return (
    <nav className={className}>
      <div className="logo">
        <div>
          <i className="fas fa-map-marker-alt fa-3x"> </i>
          <Logo to="/">
            <span>Yeh</span>property
            <span>{/* <small>.com</small> */}</span>
          </Logo>
        </div>
        <div className="switch" onClick={handleClick}>
          {!showNav && <i className=" fas fa-bars"></i>}
          {showNav && <i className=" fas fa-times"></i>}
        </div>
      </div>
      <div className="links" ref={ref}>
        {showNav && <Links activeType={activeType} />}
      </div>
      <div className="links-desktop">
        <Links activeType={activeType} />
      </div>
    </nav>
  );
};

const Nav = styled(Body)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
  flex-wrap: wrap;
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .switch {
    display: none;
    cursor: pointer;
    font-size: ${(props) => props.theme.size.h3};
  }
  i {
    color: ${(props) => props.theme.colors.a};
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    position: relative;
    .logo {
      width: 100%;
    }
    .switch {
      display: block;
    }
    .links {
      width: 100%;
    }
    .links-desktop {
      display: none;
    }
  }
`;

export default Nav;
