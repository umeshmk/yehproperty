// Responsibility
// - Active property [medium details] (project/buy/rent) (welcome pages)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProjectActiveType, PropertyType } from "../../types";

interface State {
  project: ProjectActiveType | null;
}

const initialState: State = {
  project: null,
};

// action: `dispatch(incrementAsync(10))`
// onClick={() => dispatch(incrementAsync(incrementValue))}
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

const activeSlice = createSlice({
  name: "active",
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

export const selectActiveProject = (state: RootState) => state.active.project;

export default activeSlice.reducer;
