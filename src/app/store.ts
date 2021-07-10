import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counterDemo/counterSlice";

import listReducer from "../features/reducers/listSlice";
import activeReducer from "../features/reducers/activeSlice";
import detailReducer from "../features/reducers/detailSlice";
import mapReducer from "../features/reducers/mapSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
    active: activeReducer,
    detail: detailReducer,
    map: mapReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
