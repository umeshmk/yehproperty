import { AddOnsType, AddressType, BhkType, CoordsType } from "./commanTypes";

// list item (min details)
// ----------------------
export type RentListType = {
  id: number;
  price: string;
  img: string;
  title: string;
  location: string;
};

// maplist item (min details)
// ----------------------
export type RentMapListType = RentListType & {
  config: RentType["config"];
  deposit: RentType["deposit"];
  carpet: RentType["configDetails"]["carpet"];
  coords: CoordsType; // for map search marker
};

// active Rent (medium details)
// -------------------------------
type activeProps =
  | "id"
  | "title"
  | "location"
  | "type"
  | "onFloors"
  | "floors"
  | "deposit"
  | "config"
  | "configDetails"
  | "images"
  | "owner";

export type RentActiveType = Pick<RentType, activeProps>;

// Rent (full details)
// ----------------------
export type RentType = {
  id: number;
  title: string;
  location: string;
  type: string;
  onFloors: string;
  floors: string;
  deposit: string;
  // price: string;
  config: {
    [key in BhkType]: string;
  };
  configDetails: {
    carpet: string;
    baths: string;
  };
  images: string[];
  address: AddressType;
  about: string;
  highlights: string[];
  addOns: {
    [key in AddOnsType]: boolean;
  };
  owner: {
    id: number;
    isAgent: boolean;
    name: string;
    contact: string;
  };
  coords: CoordsType;
};
