import React, { useEffect } from "react";
import styled from "styled-components";
import { IStyled } from "../../types";
import { useQuery } from "../../utility/useQuery";
import { addMap } from "./addMap";

const Body = ({ className }: IStyled) => {
  const mapDivRef = React.createRef<HTMLDivElement>();
  const query = useQuery();

  useEffect(() => {
    if (google !== undefined) {
      let coords = {
        lat: Number(query.get("lat")),
        lng: Number(query.get("lng")),
      };

      let mapObject = addMap({
        ref: mapDivRef.current,
        center: coords,
      });
    }
  }, [mapDivRef, query]);

  return (
    <div className={className}>
      <div id="map" ref={mapDivRef}></div>
    </div>
  );
};

const BasicMap = styled(Body)`
  height: 100%;
  width: 100%;

  #map {
    height: 100%;
    width: 100%;
    border: 1px solid;
  }
`;

export default BasicMap;
