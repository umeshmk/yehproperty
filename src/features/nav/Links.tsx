import { Link } from "react-router-dom";
import styled from "styled-components";
import { IStyled, PropertyType } from "../../types";

interface IProps extends IStyled {
  activeType: PropertyType["type"];
}

const Body = ({ className, activeType }: IProps) => {
  const isActive = (type: PropertyType["type"]) => {
    if (type === activeType) return "active";
  };

  return (
    <ul className={className}>
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
  );
};

const Links = styled(Body)`
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

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    width: 100%;
    flex-direction: column;
  }
`;

export default Links;
