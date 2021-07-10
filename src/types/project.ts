import { AddOnsType, AddressType, BhkType, CoordsType } from "./commanTypes";

// list item (min details)
// ----------------------
export type ProjectListType = {
  id: number;
  price: string;
  img: string;
  title: string;
  location: string;
};

// maplist item (min details)
// ----------------------
export type ProjectMapListType = ProjectListType & {
  coords: CoordsType; // for map search marker
};

// active project (medium details)
// -------------------------------
type activeProps =
  | "id"
  | "title"
  | "location"
  | "type"
  | "possession"
  | "area"
  | "floors"
  | "units"
  | "booked"
  | "config"
  | "images"
  | "developer";

export type ProjectActiveType = Pick<ProjectType, activeProps>;

// project (full details)
// ----------------------
export type ConfigDetailsType = {
  carpet: string;
  baths: string;
  bookingPrice: string;
  img: string;
};

export type ProjectType = {
  id: number;
  title: string;
  location: string;
  type: string;
  possession: string;
  area: string;
  floors: string;
  units: string;
  booked: string;
  config: {
    // [bhk: string]: string;
    [key in BhkType]: string;
  };
  images: string[];
  address: AddressType;
  rera: {
    approved: boolean;
    id: string | null;
  };
  about: string;
  highlights: string[];
  configDetails: {
    // [n: string]: ConfigDetailsType;
    [key in BhkType]: ConfigDetailsType;
  };
  addOns: {
    [key in AddOnsType]: boolean;
  };
  developer: {
    id: number;
    name: string;
    about: string;
    office: string;
    logo: string;
    contact: string;
  };
  coords: CoordsType;
};
