// Responsibility
// - list of project/buy/rent (welcome page)

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProjectListType, PropertyType } from "../../types";

interface State {
  projects: ProjectListType[] | null;
  //   status: "idle" | "loading" | "failed";
}

const initialState: State = {
  projects: null,
};

export const getListAsync = createAsyncThunk(
  "list/fetchList",
  async (type: PropertyType["type"]) => {
    const url = "/api/" + type + "-list.json";
    console.log("Async - ", url);
    const response = await fetch(url);
    const json = await response.json();

    // when `fulfilled` we have this as action.payload
    return json;
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
      state.projects = action.payload;
    });
  },
});

// export const { increment, incrementByAmount } = listSlice.actions;

// Selector functions
// -- usage : useSelector((state: RootState) => state.counter.value)
export const selectListProjects = (state: RootState) => state.list.projects;

export default listSlice.reducer;
