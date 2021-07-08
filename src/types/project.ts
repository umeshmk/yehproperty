import { AddOnsType, AddressType, CoordsType } from "./commanTypes";

export type ReraType = {
  approved: boolean;
  id: string | null;
};

export type ConfigDetailsType = {
  carpet: string;
  baths: string;
  bookingPrice: string;
  img: string;
};

export type DeveloperType = {
  id: number;
  name: string;
  about: string;
  office: string;
  logo: string;
  contact: string;
};

// For project page
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
    [rooms: string]: string;
  };
  images: string[];

  address: AddressType;
  rera: ReraType;
  about: string;
  highlights: string[];
  configDetails: {
    [n: string]: ConfigDetailsType;
  };
  addOns: {
    [key in AddOnsType]: boolean;
  };
  developer: DeveloperType;
  coords: CoordsType;
};
