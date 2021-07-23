// Responsibility
// - Active property [medium details] (project/buy/rent) (welcome pages)
// Note - Here we are fetching same jsondata as "detailSlice" just for convenience.
//        In practice api will be different in real backend

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProjectActiveType, BuyActiveType, PropertyType } from "../../types";

interface State {
  project: ProjectActiveType | null;
  buy: BuyActiveType | null;
  rent: ProjectActiveType | null;
}

const initialState: State = {
  project: null,
  buy: null,
  rent: null,
};

// action: `dispatch(incrementAsync(10))`
// onClick={() => dispatch(incrementAsync(incrementValue))}
export const getPropertyAsync = createAsyncThunk(
  "active/fetchProperty",
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
      state[type] = json;
    });
  },
});

export const selectActiveProject = (state: RootState) => state.active.project;
export const selectActiveBuy = (state: RootState) => state.active.buy;

export default activeSlice.reducer;
