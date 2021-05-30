import styled from "styled-components";
import { Carousel, Title } from "../../elements";
import { IStyled } from "../../types";

const Body = ({ className }: IStyled) => {
  return (
    <div className={className}>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="content">
        <Title title="Ashar Aria" owner="By Umesh Kadam" />
      </div>
    </div>
  );
};

const Project = styled(Body)`
  background-color: #fff;
  border: 1px solid;
  width: 70%;
  height: 60%;
  display: flex;
  /* justify-content: center; */

  .carousel {
    height: 100%;
    width: 50%;
  }

  .content {
    padding: 1rem;
  }
`;
export default Project;
