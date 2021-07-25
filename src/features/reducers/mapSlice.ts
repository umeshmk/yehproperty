// Responsibility
// - list of project/buy/rent (mapsearch page)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  BuyMapListType,
  ProjectMapListType,
  PropertyType,
  RentMapListType,
} from "../../types";

interface State {
  project: ProjectMapListType[] | null;
  buy: BuyMapListType[] | null;
  rent: RentMapListType[] | null;
}

const initialState: State = {
  project: null,
  buy: null,
  rent: null,
};

export const getMapAsync = createAsyncThunk(
  "map/fetchList",
  async (type: PropertyType["type"]) => {
    const url = "/api/" + type + "-map-list.json";
    console.log("Async - ", url);
    const response = await fetch(url);
    const json = await response.json();

    // when `fulfilled` we have this as action.payload
    return { type, json };
  }
);

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMapAsync.fulfilled, (state, action) => {
      let { type, json } = action.payload;
      state[type] = json;
    });
  },
});

// export const { increment, incrementByAmount } = mapSlice.actions;

// Selector functions
// -- usage : useSelector((state: RootState) => state.counter.value)
export const selectMapProjects = (state: RootState) => state.map.project;
export const selectMapBuys = (state: RootState) => state.map.buy;
export const selectMapRents = (state: RootState) => state.map.rent;

export default mapSlice.reducer;
