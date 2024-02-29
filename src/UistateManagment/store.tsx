import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UiSlice";

const store = configureStore({
  reducer: {
    uiRedux: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
