// import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Project from "../features/property/Project";
import Buy from "../features/property/Buy";
import { IStyled, PropertyType } from "../types";
import Rent from "../features/property/Rent";

interface IProps extends IStyled {
  type: PropertyType["type"];
}

type Query = { id: string; property: string };

const Body = ({ className, type }: IProps) => {
  let { id }: Query = useParams();

  return (
    <div className={className}>
      {type === "project" && <Project id={Number(id)} />}
      {type === "buy" && <Buy id={Number(id)} />}
      {type === "rent" && <Rent id={Number(id)} />}
    </div>
  );
};

const Property = styled(Body)`
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    margin: 5rem 0;
  }
`;

export default Property;
