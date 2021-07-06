import { mapStyle } from "./style";

interface IMap {
  ref: HTMLDivElement | null;
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

export function addMap(mapOptions: IMap) {
  let mapObject = null;

  if (google !== undefined) {
    mapObject = new google.maps.Map(mapOptions.ref as HTMLElement, {
      center: mapOptions?.center,
      zoom: mapOptions?.zoom || 10,
      // zoomControl: false,
      // panControl: false,
      mapTypeId: "roadmap",
      // mapTypeControl: false,
      styles: mapStyle,
      scrollwheel: true,
    });
  }

  return mapObject;
}
