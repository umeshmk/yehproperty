import { AddOnsType, AddressType, BhkType, CoordsType } from "./commanTypes";

// list item (min details)
// ----------------------
export type BuyListType = {
  id: number;
  price: string;
  img: string;
  title: string;
  location: string;
};

// active Buy (medium details)
// -------------------------------
type activeProps =
  | "id"
  | "title"
  | "location"
  | "type"
  | "onFloors"
  | "floors"
  | "age"
  | "config"
  | "configDetails"
  | "images"
  | "owner";

export type BuyActiveType = Pick<BuyType, activeProps>;

// Buy (full details)
// ----------------------
export type BuyType = {
  id: number;
  title: string;
  location: string;
  type: string;
  onFloors: string;
  floors: string;
  age: string;
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
