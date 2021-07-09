import { BhkType, CoordsType, AddOnsType, AddressType } from "./commanTypes";
import { ProjectType, ConfigDetailsType } from "./project";

export interface IStyled {
  className?: string;
}

// re-export (from project)
export type { ProjectType, ConfigDetailsType };
// re-export (from commonTypes)
export type { BhkType, CoordsType, AddOnsType, AddressType };

export type PropertyType = {
  type: "project" | "buy" | "rent";
  id: number;
};

export type ProjectListType = {
  id: number;
  price: string;
  img: string;
  title: string;
  location: string;
  coords?: CoordsType;
};
