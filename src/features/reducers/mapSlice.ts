// Responsibility
// - list of project/buy/rent (mapsearch page)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProjectMapListType, PropertyType } from "../../types";

interface State {
  projects: ProjectMapListType[] | null;
  //   status: "idle" | "loading" | "failed";
}

const initialState: State = {
  projects: null,
};

export const getMapAsync = createAsyncThunk(
  "map/fetchList",
  async (type: PropertyType["type"]) => {
    const url = "/api/" + type + "-map-list.json";
    console.log("Async - ", url);
    const response = await fetch(url);
    const json = await response.json();

    // when `fulfilled` we have this as action.payload
    return json;
  }
);

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMapAsync.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

// export const { increment, incrementByAmount } = mapSlice.actions;

// Selector functions
// -- usage : useSelector((state: RootState) => state.counter.value)
export const selectMapProjects = (state: RootState) => state.map.projects;

export default mapSlice.reducer;
