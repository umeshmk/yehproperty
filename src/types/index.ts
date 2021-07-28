import { BhkType, CoordsType, AddOnsType, AddressType } from "./commanTypes";
import {
  ProjectListType,
  ProjectMapListType,
  ProjectActiveType,
  ProjectType,
  ConfigDetailsType,
} from "./project";

import { BuyListType, BuyActiveType, BuyMapListType, BuyType } from "./buy";
import {
  RentActiveType,
  RentListType,
  RentMapListType,
  RentType,
} from "./rent";

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

// re-export (from buy)
export type { BuyListType, BuyActiveType, BuyMapListType, BuyType };

// re-export (from rent)
export type { RentActiveType, RentListType, RentMapListType, RentType };

// re-export (from commonTypes)
export type { BhkType, CoordsType, AddOnsType, AddressType };
