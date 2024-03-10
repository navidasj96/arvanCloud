import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UiSlice";
import FormSlice from "./FormSlice";

const store = configureStore({
  reducer: {
    uiRedux: uiSlice,
    FormRedux: FormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
