export type iconType = "pin" | "pin2" | "square" | "squareRound";

enum path {
  pin = "M27.648-41.399q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516 2.7 6.516 6.516 2.7 6.516-2.7 2.7-6.516zm9.216 0q0 3.924-1.188 6.444l-13.104 27.864q-.576 1.188-1.71 1.872t-2.43.684-2.43-.684-1.674-1.872l-13.14-27.864q-1.188-2.52-1.188-6.444 0-7.632 5.4-13.032t13.032-5.4 13.032 5.4 5.4 13.032z",
  pin2 = "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
  square = "M-24-48h48v48h-48z",
  squareRound = "M24-8c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32z",
}

type Icon = google.maps.Symbol;

type MarkerIcons = {
  [key in iconType]: Icon;
};

let color = "#E328a1";

let pin: Icon = {
  path: path.pin,
  fillColor: color,
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 0.7,
};

let pin2: Icon = {
  path: path.pin2,
  fillColor: color,
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 0.7,
};

let square: Icon = {
  path: path.square,
  fillColor: color,
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 0.3,
};

let squareRound: Icon = {
  path: path.squareRound,
  fillColor: color,
  fillOpacity: 1,
  strokeWeight: 3,
  // strokeColor: color + "33",
  strokeColor: "#fff",
  scale: 0.25,
};

export const icons: MarkerIcons = { pin, pin2, square, squareRound };
