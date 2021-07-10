import { BhkType, CoordsType, AddOnsType, AddressType } from "./commanTypes";
import {
  ProjectListType,
  ProjectMapListType,
  ProjectActiveType,
  ProjectType,
  ConfigDetailsType,
} from "./project";

export interface IStyled {
  className?: string;
}
export type PropertyType = {
  type: "project" | "buy" | "rent";
  id: number;
};

// re-export (from project)
export type {
  ProjectListType,
  ProjectMapListType,
  ProjectActiveType,
  ProjectType,
  ConfigDetailsType,
};
// re-export (from commonTypes)
export type { BhkType, CoordsType, AddOnsType, AddressType };
