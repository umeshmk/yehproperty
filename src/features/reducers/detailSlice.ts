// Responsibility
// - property [full details] (project/buy/rent) (property pages)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProjectType, PropertyType } from "../../types";

interface State {
  project: ProjectType | null;
}

const initialState: State = {
  project: null,
};

export const getPropertyAsync = createAsyncThunk(
  "list/fetchProperty",
  async ({ type, id }: PropertyType) => {
    const url = "/api/" + type + "/" + id + ".json";
    console.log("Async - ", url);
    const response = await fetch(url);
    const json = await response.json();

    // when `fulfilled` we have this as action.payload
    return { type, json };
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPropertyAsync.fulfilled, (state, action) => {
      let { type, json } = action.payload;

      if (type === "project") {
        state.project = json;
      }
    });
  },
});

export const selectDetailProject = (state: RootState) => state.detail.project;

export default detailSlice.reducer;
