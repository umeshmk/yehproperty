// Responsibility
// - list of project/buy/rent (welcome page)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  BuyListType,
  ProjectListType,
  PropertyType,
  RentListType,
} from "../../types";

interface State {
  project: ProjectListType[] | null;
  buy: BuyListType[] | null;
  rent: RentListType[] | null;
}

const initialState: State = {
  project: null,
  buy: null,
  rent: null,
};

export const getListAsync = createAsyncThunk(
  "list/fetchList",
  async (type: PropertyType["type"]) => {
    const url = "/api/" + type + "-list.json";
    // console.log("Async - ", url);
    const response = await fetch(url);
    const json = await response.json();

    // when `fulfilled` we have this as action.payload
    return { type, json };
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    // increment: (state) => {
    //   //   state.value += 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getListAsync.fulfilled, (state, action) => {
      const { type, json } = action.payload;
      state[type] = json;
    });
  },
});

// export const { increment, incrementByAmount } = listSlice.actions;

// Selector functions
// -- usage : useSelector((state: RootState) => state.counter.value)
export const selectListProjects = (state: RootState) => state.list.project;
export const selectListBuys = (state: RootState) => state.list.buy;
export const selectListRents = (state: RootState) => state.list.rent;

export default listSlice.reducer;
