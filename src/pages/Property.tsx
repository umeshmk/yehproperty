// import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Project from "../features/property/Project";
import { IStyled, PropertyOptionsType } from "../types";

interface IProps extends IStyled {
  type: PropertyOptionsType;
}

type Query = { id: string; property: string };

const Body = ({ className, type }: IProps) => {
  let { id }: Query = useParams();

  return (
    <div className={className}>
      {type === "project" && <Project id={Number(id)} />}
      {/* {type === "buy" && <Buy id={id} />} */}
      {/* {type === "rent" && <Rent id={id} />} */}
    </div>
  );
};

const Property = styled(Body)`
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Property;
