export interface IStyled {
  className?: string;
}

export type PropertyOptionsType = "project" | "buy" | "rent";

export type ProjectListType = {
  id: number;
  price: string;
  img: string;
  title: string;
  location: string;
};

export type ProjectType = {
  id: number;
  title: string;
  location: string;
  type: string; // "Apartment",
  possession: string; // "2023",
  area: string; // "24 acres",
  floors: string; // "31",
  units: string; // "235",
  booked: string; // "145",
  config: {
    [rooms: string]: string; // "14000000"
  };
  images: string[];

  address: AddressType;
  rera: ReraType;
  about: string;
  highlights: string[];
  // configDetails: {
  //   [n: string]: {
  //     carpet: string;
  //     baths: string;
  //     bookingPrice: string;
  //     img: string;
  //   };
  // };
  configDetails: {
    [n: string]: ConfigDetailsType;
  };
  addOns: {
    [key in AddOnsType]: boolean;
  };
  developer: { id: number; name: string; about: string; office: string };
};

export type AddressType = {
  line: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
};

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

export type AddOnsType =
  | "open park"
  | "security"
  | "cctv"
  | "fire safety"
  | "swimming pool"
  | "club house"
  | "gymnasium"
  | "elevator"
  | "power backup"
  | "parking";
