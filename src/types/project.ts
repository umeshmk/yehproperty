import { AddOnsType, AddressType, BhkType, CoordsType } from "./commanTypes";

export type ConfigDetailsType = {
  carpet: string;
  baths: string;
  bookingPrice: string;
  img: string;
};

// For project page (check "public/api")
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
