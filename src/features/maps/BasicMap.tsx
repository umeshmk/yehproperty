import React, { useEffect } from "react";
import "./index.css";

// interface IProps {
// mapDiv: HTMLElement;
// }

function BasicMap() {
  const mapDiv = React.createRef<HTMLDivElement>();

  useEffect(() => {
    // let map: google.maps.Map;

    if (google !== undefined) {
      new google.maps.Map(mapDiv.current as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
  }, [mapDiv]);

  return (
    <>
      <div id="map" ref={mapDiv}></div>
    </>
  );
}

export default BasicMap;
