import { Link } from "react-router-dom";
import styled from "styled-components";
import { IStyled, PropertyType } from "../../types";
import { useQuery } from "../../utility/useQuery";

const Logo = styled(Link)`
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

let Body = ({ className }: IStyled) => {
  const query = useQuery();
  const activeType = query.get("type");

  const isActive = (type: PropertyType["type"]) => {
    if (type === activeType) return "active";
  };

  return (
    <nav className={className}>
      <div className="logo">
        <i className="fas fa-map-marker-alt fa-3x"> </i>
        <Logo to="/">
          <span>Yeh</span>property
          <span>{/* <small>.com</small> */}</span>
        </Logo>
      </div>
      <ul className="links">
        <li>
          {/* <img src={shortlist} alt="shorlist" title="shortlist" /> */}
          <i className="far fa-heart fa-lg" aria-hidden="true"></i>
        </li>
        <Link to="/search?type=project&lat=19.1388&lng=72.8353">
          <li className={isActive("project")}>Project</li>
        </Link>
        <Link to="/search?type=buy&lat=19.1388&lng=72.8353">
          <li className={isActive("buy")}>Buy</li>
        </Link>
        <Link to="/search?type=rent&lat=19.1388&lng=72.8353">
          <li className={isActive("rent")}>Rent</li>
        </Link>
        <a href="#login">
          <li>Login</li>
        </a>
      </ul>
    </nav>
  );
};

const Nav = styled(Body)`
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
    li {
      color: ${(props) => props.theme.colors.b + "c0"};
      font-size: ${(props) => props.theme.size.h4};
      font-weight: 400;
    }
    a {
      margin: 0 1rem;
      text-decoration: none;
      &:hover li {
        color: ${(props) => props.theme.colors.a};
      }
    }
    .active {
      font-weight: 600;
      color: ${(props) => props.theme.colors.a};
    }
    & img {
      width: 2rem;
    }
  }
`;

export default Nav;
