import React, { useEffect } from "react";
import styled from "styled-components";
import { IStyled } from "../../types";
import { useQuery } from "../../utility/useQuery";
import "./index.css";
import { mapStyle } from "./style";

// interface IProps {
// mapDiv: HTMLElement;
// }

const Body = ({ className }: IStyled) => {
  const mapDiv = React.createRef<HTMLDivElement>();
  const query = useQuery();

  useEffect(() => {
    // let map: google.maps.Map;

    if (google !== undefined) {
      let coords = {
        lat: Number(query.get("lat")),
        lng: Number(query.get("lng")),
      };
      new google.maps.Map(mapDiv.current as HTMLElement, {
        center: coords,
        zoom: 12,
        // zoomControl: false,
        // panControl: false,
        mapTypeId: "roadmap",
        // mapTypeControl: false,
        styles: mapStyle,
        scrollwheel: true,
      });
    }
  }, [mapDiv, query]);

  return (
    <div className={className}>
      {/* <h1>{query.get("lat")}</h1>
      <h1>{query.get("lng")}</h1> */}
      <div id="map" ref={mapDiv}></div>
    </div>
  );
};

const BasicMap = styled(Body)`
  height: 100%;
  width: 100%;
`;

export default BasicMap;
