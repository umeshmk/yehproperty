import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IStyled, PropertyType } from "../../types";
import { useQuery } from "../../utility/useQuery";
import {
  getMapAsync,
  selectMapProjects,
  selectMapBuys,
  selectMapRents,
} from "../reducers/mapSlice";
import { addMap } from "../maps/addMap";
import { addMarker } from "../maps/addMarker";
import { calculatePrice } from "../../utility/calculatePrice";
import { slugify } from "../../utility/slugify";
import Listing from "./Listing";

const Body = ({ className }: IStyled) => {
  const mapDivRef = React.createRef<HTMLDivElement>();
  const query = useQuery();
  const propertyType = query.get("type") as PropertyType["type"];
  const coords = {
    lat: Number(query.get("lat")),
    lng: Number(query.get("lng")),
  };

  const dispatch = useAppDispatch();
  const projectList = useAppSelector(selectMapProjects);
  const buyList = useAppSelector(selectMapBuys);
  const rentList = useAppSelector(selectMapRents);
  let mapList = projectList;
  if (propertyType === "buy") mapList = buyList;
  if (propertyType === "rent") mapList = rentList;

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
        const { p, text } = calculatePrice(item.price);

        let marker = addMarker({
          map: mapObject,
          coords: item.coords,
          text: p + " " + text,
          textClass: className + " markerBasePrice",
          icon: "squareRound",
        });

        marker.addListener("mouseover", () => {
          const content = `
          <a href="${linkTo(item.id, item.title)}" rel="noopener noreferrer">
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
      <div id="listing">
        {mapList && <Listing type={propertyType} data={mapList}></Listing>}
      </div>
    </div>
  );
};

const SearchMap = styled(Body)`
  height: 100%;
  width: 100%;
  display: flex;

  #map {
    height: 100%;
    width: 75%;
    /* border: 1px solid; */
  }

  #listing {
    width: 25%;
    background-color: #fff;
    background-color: #00000010;
    background-color: ${(props) => props.theme.colors.b + "10"};
    border-left: 1px solid ${(props) => props.theme.colors.b + "cc"};
    /* padding: 1rem; */
    overflow-y: scroll;
  }

  /* price below marker  */
  .markerBasePrice {
    /* background-color: ${(props) => props.theme.colors.a + "35"}; */
    /* background-color: #dfdfdf; */
    background-color: #fff;
    height: 1.2rem;
    padding: 1px 5px;
    margin-top: 1.4rem;
    /* border: 2px solid ${(props) => props.theme.colors.a + "55"}; */
    border: 1px solid #aaa;
    border-radius: 2rem;
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

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    #map {
      width: 100%;
    }
    #listing {
      display: none;
    }
  }
`;

export default SearchMap;
