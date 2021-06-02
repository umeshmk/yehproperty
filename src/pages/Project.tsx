// import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { IStyled } from "../types";

const Body = ({ className }: IStyled) => {
  let { id }: { id: string } = useParams();
  return (
    <div className={className}>
      <h1>hello {id}</h1>
    </div>
  );
};

const Project = styled(Body)`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Project;
