import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemState } from "../UistateManagment/UiSlice";

export default function PrepItemForm() {
  const dispatch = useDispatch();
  const { values, handleBlur, submitForm, handleChange } = useFormik({
    initialValues: {
      preparationTime: 0,
      dailyInventory: 0,
      fixDailyInventory: 0,
    },
    onSubmit: async (values) => {
      console.log("submitted prepform values");
      Object.entries(values).forEach(([key, value]) => {
        const obj: any = {};
        obj[key] = value;
        dispatch(setAddItemState(obj));
      });
    },
  });

  const { dailyInventory, fixDailyInventory, preparationTime } = values;
  const customChangeHandler = (e: any) => {
    handleChange(e);
    submitForm();
  };
  return (
    <div className="w-full flex flex-col">
      <form>
        <div className="flex flex-col space-y-4">
          <TextField
            label={`preparationTime`}
            id="preparationTime"
            variant="outlined"
            type="number"
            value={preparationTime}
            multiline
            onBlur={handleBlur}
            onChange={customChangeHandler}
            sx={{ fontFamily: "fontIR" }}
          />
          <TextField
            label={`dailyInventory`}
            id="dailyInventory"
            variant="outlined"
            value={dailyInventory}
            type="number"
            multiline
            onBlur={handleBlur}
            onChange={customChangeHandler}
            sx={{ fontFamily: "fontIR" }}
          />
          <TextField
            label={`fixDailyInventory`}
            id="fixDailyInventory"
            variant="outlined"
            value={fixDailyInventory}
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
