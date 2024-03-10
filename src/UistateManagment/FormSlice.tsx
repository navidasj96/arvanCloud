import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  formState: {};
}

var initialState: FormState = {
  formState: {},
};

const FormSlice = createSlice({
  name: "FormRedux",
  initialState,
  reducers: {
    setFormState: (state, action: PayloadAction<any>) => {
      state.formState = { ...state.formState, ...action.payload };
    },
  },
});

export const { setFormState } = FormSlice.actions;
export default FormSlice.reducer;
