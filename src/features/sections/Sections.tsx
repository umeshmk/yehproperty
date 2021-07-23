import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PropertyList } from "../../elements";
import { IStyled } from "../../types";
import {
  getListAsync,
  selectListProjects,
  selectListBuys,
} from "../reducers/listSlice";
import Buy from "./Buy";
import Project from "./Project";

const Heading = styled.div`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h2};
  font-family: ${(props) => props.theme.family.c};
  font-weight: 800;
`;

const Body = ({ className }: IStyled) => {
  const projectList = useAppSelector(selectListProjects);
  const buyList = useAppSelector(selectListBuys);
  const dispatch = useAppDispatch();

  const [activeProject, setActiveProject] = useState<null | number>(null);
  const [activeBuy, setActiveBuy] = useState<null | number>(null);

  // get projectslist
  useEffect(() => {
    dispatch(getListAsync("project"));
    dispatch(getListAsync("buy"));
  }, [dispatch]);

  // set 1st project from projectlist as active
  useEffect(() => {
    if (projectList) {
      setActiveProject(projectList[0].id);
    }
  }, [projectList]);

  useEffect(() => {
    if (buyList) {
      setActiveBuy(buyList[0].id);
    }
  }, [buyList]);

  // change active on click
  const handleProjectClick = (pid: number) => {
    setActiveProject(pid);
  };

  const handleBuyClick = (pid: number) => {
    setActiveBuy(pid);
  };

  return (
    <div className={className}>
      <div className="container">
        <Heading>Projects</Heading>
        <div className="property-banner">
          <Project pid={activeProject} />
        </div>
        <div className="property-list">
          {activeProject && (
            <PropertyList
              data={projectList}
              active={activeProject}
              handleClick={handleProjectClick}
            />
          )}
        </div>
      </div>
      <div className="container">
        <Heading>Buy</Heading>
        <div className="property-banner">
          <Buy pid={activeBuy} />
        </div>
        <div className="property-list">
          {activeBuy && (
            <PropertyList
              data={buyList}
              active={activeBuy}
              handleClick={handleBuyClick}
            />
          )}
        </div>
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
