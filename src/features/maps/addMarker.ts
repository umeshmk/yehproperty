import { CoordsType } from "../../types";
import { icons, iconType } from "./markerIcons";

console.log(icons);

interface IMarker {
  map: google.maps.Map | null;
  coords: CoordsType;
  title: string;
  icon: iconType;
}

export function addMarker(marker: IMarker) {
  new google.maps.Marker({
    position: marker.coords,
    map: marker.map,
    title: marker.title,
    icon: icons[marker.icon] || icons.pin,
    // icon: "https://res.cloudinary.com/dy4mautzh/image/upload/v1624862119/yehproperty/marker.svg",
  });
}
