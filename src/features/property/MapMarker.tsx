// Map with simple marker

import React, { useEffect } from "react";
import styled from "styled-components";
import { CoordsType, IStyled } from "../../types";
import { addMap } from "../maps/addMap";
import { addMarker } from "../maps/addMarker";

interface IProps extends IStyled {
  coords: CoordsType;
  title: string;
}

const Body = ({ className, coords, title }: IProps) => {
  const mapDivRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    let mapObject = addMap({
      ref: mapDivRef.current,
      center: coords,
    });

    addMarker({
      map: mapObject,
      coords: coords,
      title: title,
      icon: "pin",
    });
  }, []);

  return (
    <div className={className}>
      <div id="map" ref={mapDivRef}></div>
    </div>
  );
};

const MapMarker = styled(Body)`
  height: 100%;
  width: 100%;

  #map {
    height: 100%;
    width: 100%;
    border: 1px solid;
  }
`;

export default MapMarker;
