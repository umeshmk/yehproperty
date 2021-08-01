import styled from "styled-components";
import { IStyled, PropertyType } from "../../types";

const Title = styled.div`
  color: ${(props) => props.theme.colors.b};
  font-size: ${(props) => props.theme.size.h3};
  font-family: ${(props) => props.theme.family.c};
  padding-bottom: 1.5rem;
`;

const List = styled.li`
  /* color: ${(props) => props.theme.colors.b}; */
  .fas {
    color: ${(props) => props.theme.colors.a + "90"};
    padding: 0 0.4rem;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.b};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const getList = (type: PropertyType["type"]) => {
  const cities = ["Mumbai", "Navi-Mumbai", "Thane", "Pune", "Nashik"];

  return cities.map((i) => {
    return (
      <List key={i}>
        <i className="fas fa-map-marker-alt"></i>
        {/* <Link href={`/search/${type}/${i}`}>{i}</Link> */}
        <Link href="#">{i}</Link>
      </List>
    );
  });
};

const Body = ({ className }: IStyled) => {
  return (
    <footer className={className}>
      <div className="city-links">
        <div>
          <Title>Project</Title>
          <ul>{getList("project")}</ul>
        </div>
        <div>
          <Title>Buy</Title>
          <ul>{getList("buy")}</ul>
        </div>
        <div>
          <Title>Rent</Title>
          <ul>{getList("rent")}</ul>
        </div>
        <div>
          <Title>Others</Title>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="about">
        <span>Yehproperty.com</span> is an online real-estate property search
        platform. We provide services wherein Developers/Agents/Individuals can
        post property ads to Sell or Rent both new and old properties. We help
        customers find a property with our Map-based Property search and
        filters.
        <div className="social">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="email">
          {/* Contact &nbsp;:&nbsp; support@yehproperty.com */}
          support@yehproperty.com
        </div>
        <div className="copyright">
          © All rights reserved by &nbsp;
          <Link href="https://umeshmk.github.io/" title="Umesh Kadam">
            Umesh Kadam
          </Link>
        </div>
      </div>
    </footer>
  );
};

const Footer = styled(Body)`
  background-color: ${(props) => props.theme.colors.a + "30"};
  color: ${(props) => props.theme.colors.b};
  font-family: ${(props) => props.theme.family.a};
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  .city-links {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 3rem;
    flex-wrap: wrap;

    & > div {
      padding: 0 3rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
  .about {
    /* font-size: ${(props) => props.theme.size.h5}; */
    width: 30%;
    color: ${(props) => props.theme.colors.b + "90"};
    font-style: italic;
    font-weight: 800;
    line-height: 2rem;
    span {
      color: ${(props) => props.theme.colors.a};
    }
    .social {
      color: ${(props) => props.theme.colors.a};
      width: 15rem;
      padding: 1rem 0;
      display: flex;
      justify-content: space-around;
    }
    .email,
    .copyright {
      color: ${(props) => props.theme.colors.b};
      font-weight: 800;
    }
    .copyright a {
      color: ${(props) => props.theme.colors.a};
    }
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    padding: 3rem 1rem;
    .city-links {
      padding: 0;
      justify-content: space-around;

      & > div {
        padding: 1rem 1rem;
      }
    }
    .about {
      width: 100%;
      padding: 2rem 1rem;
      .social {
        width: 100%;
        padding: 3rem 0;
      }
      .email,
      .copyright {
        text-align: center;
      }
    }
  }
`;

export default Footer;
