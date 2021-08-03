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
  display: flex;
  align-items: center;

  .fas {
    padding-right: 0.5rem;
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    align-items: flex-start;
    .fas {
      padding-top: 0.3rem;
      padding-right: 0.8rem;
    }
  }
`;

const LocationSmall = styled(Location)`
  font-size: ${(props) => props.theme.size.h5};
  padding: 0.4rem;
  .fas {
    /* padding-right: 0.25rem; */
    display: none;
  }
`;

const LocationLong = styled(Location)`
  border-radius: 2rem;
  padding: 0.3rem 1rem;

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    border-radius: 0;
    padding: 1rem;
  }
`;

export { Location, LocationSmall, LocationLong };
