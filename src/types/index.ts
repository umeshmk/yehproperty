import { CoordsType, AddOnsType, AddressType } from "./commanTypes";
import {
  ProjectType,
  ConfigDetailsType,
  DeveloperType,
  ReraType,
} from "./project";

export interface IStyled {
  className?: string;
}

// re-export (from project)
export type { ProjectType, ConfigDetailsType, DeveloperType, ReraType };
// re-export (from commonTypes)
export type { CoordsType, AddOnsType, AddressType };

export type PropertyOptionsType = "project" | "buy" | "rent";

export type ProjectListType = {
  id: number;
  price: string;
  img: string;
  title: string;
  location: string;
  coords?: CoordsType;
};
