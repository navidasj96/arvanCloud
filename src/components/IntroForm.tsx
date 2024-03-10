import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useUiRedux } from "../utils/getUiState";
import { setAddItemState } from "../UistateManagment/UiSlice";

export default function IntroForm() {
  const { addItemState } = useUiRedux();
  // console.log("addItemState", addItemState);

  const dispatch = useDispatch();
  const { values, handleBlur, handleSubmit, handleChange, submitForm } =
    useFormik({
      initialValues: {
        name: "",
        itemCode: "",
        description: "",
      },
      onSubmit: async (values) => {
        Object.entries(values).forEach(([key, value]) => {
          const obj: any = {};
          obj[key] = value;
          dispatch(setAddItemState(obj));
        });
      },
    });
  const { description, itemCode, name } = values;
  const customChangeHandler = (e: any) => {
    handleChange(e);
    submitForm();
  };
  return (
    <div className="w-full flex flex-col">
      <form>
        <div className="flex flex-col space-y-4">
          <TextField
            label={`name`}
            id="name"
            variant="outlined"
            value={name}
            multiline
            onBlur={handleBlur}
            onChange={customChangeHandler}
            sx={{ fontFamily: "fontIR" }}
          />
          <TextField
            label={`itemCode`}
            id="itemCode"
            variant="outlined"
            value={itemCode}
            multiline
            onBlur={handleBlur}
            onChange={customChangeHandler}
            sx={{ fontFamily: "fontIR" }}
          />
          <TextField
            label={`description`}
            id="description"
            variant="outlined"
            value={description}
            multiline
            onBlur={handleBlur}
            onChange={customChangeHandler}
            sx={{ fontFamily: "fontIR" }}
          />
        </div>
      </form>
    </div>
  );
}
