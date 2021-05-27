import React, { useEffect } from "react";
import BasicMap from "../maps/BasicMap";
import "./index.css";

function Header() {
  // const mapDiv = React.createRef<HTMLDivElement>();

  // useEffect(() => {
  //   let map: google.maps.Map;

  //   function initMap(): void {
  //     map = new google.maps.Map(mapDiv.current as HTMLElement, {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8,
  //     });
  //   }
  //   initMap();
  // }, [mapDiv]);

  return (
    <header>
      <h1>helloworld</h1>
      <BasicMap />
    </header>
  );
}

export default Header;
