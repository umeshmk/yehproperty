import { useEffect, useState } from "react";

interface IMarker {
  map: google.maps.Map | null;
  coords: {
    lat: number;
    lng: number;
  };
  title: string;
}

export function addMarker(marker: IMarker) {
  let icon = {
    path: "M27.648-41.399q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516 2.7 6.516 6.516 2.7 6.516-2.7 2.7-6.516zm9.216 0q0 3.924-1.188 6.444l-13.104 27.864q-.576 1.188-1.71 1.872t-2.43.684-2.43-.684-1.674-1.872l-13.14-27.864q-1.188-2.52-1.188-6.444 0-7.632 5.4-13.032t13.032-5.4 13.032 5.4 5.4 13.032z",
    // path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
    fillColor: "#E32831",
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 0.7,
  };
  new google.maps.Marker({
    position: marker?.coords,
    map: marker?.map,
    title: marker?.title,
    icon: icon,
    // icon: "https://res.cloudinary.com/dy4mautzh/image/upload/v1624862119/yehproperty/marker.svg",
  });
}
