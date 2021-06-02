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
};

// type: ListOptionsType, id:number
