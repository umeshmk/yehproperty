import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button, Carousel, Location, Price, Title } from "../../elements";
import { IStyled, ProjectType } from "../../types";
import { calculatePrice } from "../../utility/calculatePrice";
import { getPropertyAsync, selectActiveProject } from "../reducers/listSlice";

interface IProps extends IStyled {
  pid: number | null;
}

const Body = ({ className, pid }: IProps) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectActiveProject);

  useEffect(() => {
    if (pid) {
      dispatch(getPropertyAsync({ type: "project", id: pid }));
    }
  }, [pid, dispatch]);

  const featureKeys = [
    "type",
    "possession",
    "area",
    "floors",
    "units",
    "booked",
  ];

  if (project === null) return <></>;
  console.log("project render", project);

  const configJsx = Object.keys(project.config).map((key) => {
    const { p, text } = calculatePrice(project.config[key]);
    return (
      <li key={key}>
        {key} <small>x</small> <i className="fas fa-bed "></i>
        <div>
          {p} {text}
        </div>
      </li>
    );
  });

  const featuresJsx = Object.keys(project).map((key) => {
    if (!featureKeys.includes(key)) return null;
    return (
      <li key={key}>
        {key} :<div>{project[key as keyof ProjectType]}</div>
      </li>
    );
  });

  return (
    <div className={className}>
      <div className="carousel">
        <Carousel imageList={project.images} />
        <Location className="location">{project.location}</Location>
      </div>
      <div className="content">
        <div className="content-header">
          <Title title={project.title} owner="By Umesh Kadam" />
          {/* <MyDate timestamp="2016-05-09T14:35:11Z" /> */}
          <Price price={Object.values(project.config)[0]} />
        </div>
        <ul className="config">{configJsx}</ul>
        <Button className="details">Details</Button>
        <ul className="features">{featuresJsx}</ul>
      </div>
    </div>
  );
};

const Project = styled(Body)`
  background-color: #fff;
  border: 1px solid;
  /* width: 70%;
  height: 60%; */
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  /* justify-content: center; */

  .carousel {
    /* height: 100%; */
    width: 50%;
    position: relative;
  }

  .location {
    position: absolute;
    /* font-size: ${(props) => props.theme.size.h4}; */
    top: 0;
    left: 0;
  }

  .content {
    /* padding: 1rem; */
    /* border: 1px solid red; */
    width: 50%;
    /* padding-left: 1rem; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    /* padding-bottom: 10rem; */
  }
  .content-header {
    display: flex;
    padding-left: 1rem;
    /* border: 1px solid; */
    justify-content: space-between;
    align-items: flex-end;
  }

  .features,
  .config {
    color: ${(props) => props.theme.colors.a};
    font-size: ${(props) => props.theme.size.h4};
    /* font-family: ${(props) => props.theme.family.a}; */
    list-style: none;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .features div,
  .config div {
    font-weight: 600;
    border-top: 1px solid ${(props) => props.theme.colors.b + "55"};
    color: ${(props) => props.theme.colors.b};
    margin-top: 1rem;
  }

  .config {
    /* font-size: ${(props) => props.theme.size.h3}; */
    justify-content: center;
    /* margin-top: 5rem; */

    li {
      padding: 0 1rem;
      /* display: flex; */
      /* flex-direction: column; */
    }
    div {
      font-size: ${(props) => props.theme.size.h3};
      /* font-family: ${(props) => props.theme.family.a}; */
      border-left: 1px solid ${(props) => props.theme.colors.b + "55"};
      /* border-color: ${(props) => props.theme.colors.a}; */
      padding: 1rem;
      font-weight: 300;
    }
    small {
      color: ${(props) => props.theme.colors.b};
    }
  }

  .text {
    padding-left: 1rem;
  }
  .details {
    margin: 0 auto;
    width: 40%;
    margin-bottom: 1rem;
  }
`;
export default Project;
