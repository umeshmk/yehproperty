import styled from "styled-components";
import { IStyled } from "../../types";
import Project from "./Project";

const Heading = styled.div`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h2};
  font-family: ${(props) => props.theme.family.c};
  font-weight: 800;
  padding-bottom: 1rem;
`;

const Body = ({ className }: IStyled) => {
  return (
    <div className={className}>
      <div className="container">
        <Heading>Projects</Heading>
        <Project />
      </div>
      <div className="container">
        <Heading>Buy</Heading>
        <Project />
      </div>
      <div className="container">
        <Heading>Rent</Heading>
        <Project />
      </div>
    </div>
  );
};

const Sections = styled(Body)`
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 2rem; */
    /* border: 1px solid; */

    &:nth-last-of-type(even) {
      background-color: ${(props) => props.theme.colors.a + 22};
    }

    & .title {
      /* color: ${(props) => props.theme.colors.a};
      font-size: ${(props) => props.theme.size.h2};
      font-family: ${(props) => props.theme.family.c};
      font-weight: 800; */
    }
  }
`;

export default Sections;
