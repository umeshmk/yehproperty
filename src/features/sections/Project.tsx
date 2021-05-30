import styled from "styled-components";
import { Carousel, MyDate, Price, Title } from "../../elements";
import { IStyled } from "../../types";

const Body = ({ className }: IStyled) => {
  return (
    <div className={className}>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="content">
        <div className="content-header">
          <Title title="Ashar Aria" owner="By Umesh Kadam" />
          {/* <MyDate timestamp="2016-05-09T14:35:11Z" /> */}

          <Price price="70000000" />
        </div>
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
    /* padding: 1rem; */
    /* border: 1px solid red; */
    width: 50%;
    padding-left: 1rem;
  }
  .content-header {
    display: flex;
    /* border: 1px solid; */
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export default Project;
