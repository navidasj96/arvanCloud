import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

export default function ItemPriceFormTest() {
  const validationSchema = Yup.object().shape({
    // Other fields in your form

    price: Yup.number()
      .min(0, "price must not be below zero")
      .required("price is required"),
  });
  const [initialValues, setInitialValues] = useState({
    price: 0,
  });

  const inputChangeHandler = (event: any) => {
    setInitialValues((prev) => ({
      ...prev,
      price: event.target.value > 0 ? event.target.value : 0,
    }));
  };
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    submitForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema,
    enableReinitialize: true,
    validateOnMount: true,

    onSubmit: async (values) => {
      // console.log("values", values);
    },
  });
  // console.log("touched", touched);
  // console.log("errors", errors);
  const customeChange = (e: any) => {
    handleChange(e);
    submitForm();
  };
  useEffect(() => {
    submitForm();
  }, [values, submitForm]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <TextField
            id="price"
            size="small"
            type="number"
            onChange={customeChange}
            onBlur={handleBlur}
            value={values.price}
            inputProps={{ min: 0 }}
          />
          <div>{touched.price && errors.price && <p>{errors.price}</p>}</div>
        </div>
        <div className="pt-10">
          <input
            type="number"
            value={initialValues.price}
            onChange={inputChangeHandler}
          />
        </div>
      </form>
    </div>
  );
}
