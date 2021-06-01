import { Children } from "react";
import styled from "styled-components";
import { IStyled } from "../types";

interface IProps extends IStyled {
  children: string;
}

const Body = ({ className, children }: IProps) => {
  return (
    <div className={className}>
      <i className="fas fa-map-marker-alt "></i> {children}
    </div>
  );
};

const Location = styled(Body)`
  color: ${(props) => props.theme.colors.c};
  font-size: ${(props) => props.theme.size.h4};
  background-color: ${(props) => props.theme.colors.b};
  padding: 1rem;
  border-radius: 0 0 1rem 0;
  font-weight: 300;
`;

const LocationSmall = styled(Location)`
  font-size: ${(props) => props.theme.size.h5};
  padding: 0.4rem;
`;

export { Location, LocationSmall };
