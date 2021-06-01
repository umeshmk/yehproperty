import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PropertyList } from "../../elements";
import { IStyled } from "../../types";
import {
  getListAsync,
  getPropertyAsync,
  selectListProjects,
} from "../reducers/listSlice";
import Project from "./Project";

const Heading = styled.div`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h2};
  font-family: ${(props) => props.theme.family.c};
  font-weight: 800;
`;

const Body = ({ className }: IStyled) => {
  const projects = useAppSelector(selectListProjects);
  const dispatch = useAppDispatch();

  const [activeProject, setActiveProject] = useState<null | number>(null);

  // get projectslist
  useEffect(() => {
    dispatch(getListAsync("project"));
  }, [dispatch]);

  // set 1st project from projectlist as active
  useEffect(() => {
    if (projects) {
      setActiveProject(projects[0].id);
      // dispatch(getPropertyAsync({ type: "project", id: 1 }));
    }
  }, [projects, dispatch]);

  console.log("section render");

  // change active on click
  const handleClick = (pid: number) => {
    setActiveProject(pid);
    console.log(pid);
  };

  return (
    <div className={className}>
      <div className="container">
        <Heading>Projects</Heading>
        <div className="property-banner">
          <Project pid={activeProject} />
        </div>
        <div className="property-list">
          <PropertyList data={projects} handleClick={handleClick} />
        </div>
      </div>
      <div className="container">
        <Heading>Buy</Heading>
        {/* <Project /> */}
      </div>
      <div className="container">
        <Heading>Rent</Heading>
        {/* <Project /> */}
      </div>
    </div>
  );
};

const Sections = styled(Body)`
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    /* border: 1px solid; */

    &:nth-last-of-type(even) {
      background-color: ${(props) => props.theme.colors.a + 22};
    }
  }

  .property-banner {
    width: 70%;
    height: 50%;
    position: relative;
    /* padding-bottom: 2rem; */
  }
  .property-list {
    width: 70%;
  }
`;

export default Sections;
