import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IStyled, PropertyType } from "../../types";
import { useQuery } from "../../utility/useQuery";
import { getMapAsync, selectMapProjects } from "../reducers/mapSlice";
import { addMap } from "../maps/addMap";
import { addMarker } from "../maps/addMarker";
import { calculatePrice } from "../../utility/calculatePrice";
import { slugify } from "../../utility/slugify";

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

  // Router's <Link to={} > is a react component which can't be used in infowindow
  const linkTo = (id: number, title: string) => {
    return `/${
      process.env.REACT_APP_ROUTER_BASENAME
    }/${propertyType}/${id}/${slugify(title)}`;
  };

  // get mapList
  useEffect(() => {
    dispatch(getMapAsync(propertyType));
  }, [dispatch, propertyType]);

  // create map with markers
  useEffect(() => {
    if (google !== undefined && mapList) {
      let mapObject = addMap({
        ref: mapDivRef.current,
        center: coords,
        zoom: 11,
      });

      const infoWindow = new google.maps.InfoWindow();

      // close infowindow when clicked on map
      mapObject?.addListener("click", () => {
        infoWindow.close();
      });

      // add all properties as markers
      mapList.forEach((item) => {
        let marker = addMarker({
          map: mapObject,
          coords: item.coords,
          icon: "squareRound",
        });

        marker.addListener("mouseover", () => {
          const { p, text } = calculatePrice(item.price);
          const content = `
          <a href="${linkTo(
            item.id,
            item.title
          )}" target="_blank" rel="noopener noreferrer">
            <div class="img">
              <img src="${process.env.REACT_APP_IMAGE_SM_URL + item.img}"/>
            </div>          
            <div class="wrap">
              <div class="title">
              ${item.title}
              </div>          
              <div class="price">          
              <i class="fas fa-rupee-sign">
              </i>
              ${p} ${text}
              </div>
            </div>
          </a>
          `;

          infoWindow.setContent(content);
          infoWindow.open(mapObject, marker);
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

  /* infowindow content */
  .gm-style-iw-d div a {
    display: flex;
    align-items: center;
    text-decoration: none;
    .img {
      width: 6rem;
      img {
        width: 100%;
      }
    }
    .wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 10rem;
      padding: 0 1rem;
    }
    .title,
    .price {
      font-family: ${(props) => props.theme.family.a};
      color: ${(props) => props.theme.colors.a};
      font-size: ${(props) => props.theme.size.h4};
      font-weight: 600;
      padding-bottom: 0.5rem;
    }
    .price {
      color: ${(props) => props.theme.colors.b};
    }
  }
`;

export default SearchMap;
