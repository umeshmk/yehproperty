// import React from "react";

import styled from "styled-components";
import BasicMap from "../features/maps/BasicMap";
import { IStyled } from "../types";

const Body = ({ className }: IStyled) => {
  return (
    <div className={className}>
      <div className="map">
        <BasicMap />
      </div>
    </div>
  );
};

const Search = styled(Body)`
  /* margin: 5rem 0; */
  margin-top: 4.3rem;
  height: 90vh;
  /* width: 50vw; */

  .map {
    width: 100%;
    height: 100%;
  }
`;
export default Search;