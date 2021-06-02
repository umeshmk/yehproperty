export let mapStyle: google.maps.MapTypeStyle[] = [
  // {
  //   featureType: "landscape.natural.terrain",
  //   stylers: [{ visibility: "off" }],
  // },
  // {
  //   featureType: "landscape.natural.landcover",
  //   stylers: [{ visibility: "off" }],
  // },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    // stylers: [{ visibility: "on", color: "#222" }],
    stylers: [{ color: "#a5a555" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    // stylers: [{ visibility: "on", color: "#222" }],
    stylers: [{ color: "#cccccc" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    // stylers: [{ visibility: "on", color: "#222" }],
    stylers: [{ visibility: "off" }],
  },
];
