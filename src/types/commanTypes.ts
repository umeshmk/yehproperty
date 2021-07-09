export type BhkType = "1" | "2" | "3" | "4" | "5";

export type CoordsType = {
  lat: number;
  lng: number;
};

export type AddressType = {
  line: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
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
