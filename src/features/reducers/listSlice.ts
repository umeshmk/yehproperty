import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProjectListType, ProjectType, PropertyOptionsType } from "../../types";

interface ListState {
  projects: ProjectListType[] | null;
  active: {
    project: ProjectType | null;
  };
  //   status: "idle" | "loading" | "failed";
}

type PropertyType = {
  type: PropertyOptionsType;
  id: number;
};

const initialState: ListState = {
  projects: null,
  active: {
    project: null,
  },
  //   status: "idle",
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

    return { type, json }; //  `fulfilled` action payload
  }
);

export const getListAsync = createAsyncThunk(
  "list/fetchList",
  async (type: PropertyOptionsType) => {
    const url = "/api/" + type + "-list.json";
    console.log("Async - ", url);
    const response = await fetch(url);
    const json = await response.json();

    return json; //  `fulfilled` action payload
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
    builder
      .addCase(getListAsync.fulfilled, (state, action) => {
        //   state.status = "idle";
        state.projects = action.payload;
      })
      .addCase(getPropertyAsync.fulfilled, (state, action) => {
        if (action.payload.type === "project")
          state.active.project = action.payload.json;
      });
    //       .addCase(incrementAsync.pending, (state) => {
    //         state.status = 'loading';
    //       });
  },
});

// export const { increment, incrementByAmount } = listSlice.actions;

// Selector functions
// -- usage : useSelector((state: RootState) => state.counter.value)
export const selectListProjects = (state: RootState) => state.list.projects;
export const selectActiveProject = (state: RootState) =>
  state.list.active.project;

export default listSlice.reducer;
