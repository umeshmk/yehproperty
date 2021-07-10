import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IStyled, PropertyType } from "../../types";
import { useQuery } from "../../utility/useQuery";
import { getMapAsync, selectMapProjects } from "../reducers/mapSlice";
import { addMap } from "../maps/addMap";
import { addMarker } from "../maps/addMarker";

const Body = ({ className }: IStyled) => {
  const dispatch = useAppDispatch();
  const mapList = useAppSelector(selectMapProjects);

  const mapDivRef = React.createRef<HTMLDivElement>();
  const query = useQuery();
  const propertyType = query.get("type") as PropertyType["type"];
  const coords = {
    lat: Number(query.get("lat")),
    lng: Number(query.get("lng")),
  };

  // get mapList
  useEffect(() => {
    dispatch(getMapAsync(propertyType));
  }, [dispatch, propertyType]);

  useEffect(() => {
    if (google !== undefined && mapList) {
      console.log(mapList);
      let mapObject = addMap({
        ref: mapDivRef.current,
        center: coords,
        zoom: 11,
      });

      mapList.forEach((item) => {
        addMarker({
          map: mapObject,
          coords: item.coords,
          // title: item.price,
          title: `${item.title}`,
          icon: "squareRound",
        });
      });
    }
  }, [mapDivRef, mapList]);

  return (
    <div className={className}>
      <div id="map" ref={mapDivRef}></div>
    </div>
  );
};

const SearchMap = styled(Body)`
  height: 100%;
  width: 100%;

  #map {
    height: 100%;
    width: 100%;
    border: 1px solid;
  }
`;

export default SearchMap;
