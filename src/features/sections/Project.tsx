import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Button,
  Carousel,
  FeatureList,
  Location,
  Price,
  Title,
  ConfigPrice,
} from "../../elements";
import { IStyled } from "../../types";
import { _pick } from "../../utility/lodash";
import { slugify } from "../../utility/slugify";
import { getPropertyAsync, selectActiveProject } from "../reducers/activeSlice";

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

  const features = _pick(project, [
    "type",
    "possession",
    "area",
    "floors",
    "units",
    "booked",
  ]);

  if (project === null) return <></>;

  return (
    <div className={className}>
      <div className="carousel">
        <Carousel imageList={project.images} />
        <Location className="location">{project.location}</Location>
      </div>
      <div className="content">
        <div className="content-header">
          <Title title={project.title} owner={`By ${project.developer.name}`} />
          <Price className="price" price={Object.values(project.config)[0]} />
        </div>
        <ConfigPrice list={project.config} />
        <Button
          className="details"
          to={`/project/${project.id}/${slugify(project.title)}`}
        >
          Details
        </Button>

        <FeatureList list={features as {}} />
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

  .text {
    padding-left: 1rem;
  }
  .details {
    margin: 0 auto;
    width: 40%;
    margin-bottom: 1rem;
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    flex-wrap: wrap;
    /* border: 2px solid red; */

    .carousel {
      width: 100%;
      height: 40vh;
    }
    .content {
      width: 100%;
    }
    .content-header {
      /* width: 100%; */
      flex-wrap: wrap;
      padding: 1rem;
      .price {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
export default Project;
