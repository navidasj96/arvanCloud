import React from "react";
import FormContainer from "./FormContainer";
import { Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setAddItemState } from "../UistateManagment/UiSlice";
import { useUiRedux } from "../utils/getUiState";
import { TextField } from "@mui/material";
import { useFormRedux } from "../utils/getFormState";
import { setFormState } from "../UistateManagment/FormSlice";

interface MyObject {
  [key: string]: any;
}
export default function ItemPriceFormTemplateDefault() {
  const dispatch = useDispatch();
  const { formState } = useFormRedux();
  // console.log("formState", formState);

  const { values, handleSubmit, handleChange, handleBlur, submitForm } =
    useFormik({
      initialValues: {
        price: 0,
        priceAfterDiscount: 0,
        packagingCost: 0,
        taxPercent: 0,
      },
      onSubmit: (values) => {
        // Handle form submission logic here
        // let optionArr: MyObject = {};

        // const info = {
        //   serviceTypeId: 100,
        //   price,
        //   packagingCost,
        //   taxPercent,
        // };
        // optionArr[`serviceTypeDefault`] = info;
        // dispatch(setAddItemState(optionArr));
        // console.log("form values are", values);
        dispatch(setFormState(values));
      },
    });
  const {
    packagingCost,

    price,
    priceAfterDiscount,
    taxPercent,
  } = values;

  const customHandleChange = (event: any) => {
    handleChange(event);
    submitForm();
  };
  return (
    <div className="w-full grid grid-cols-4 gap-4 ">
      <TextField
        id="price"
        label="price"
        size="small"
        type="number"
        onChange={customHandleChange}
        value={price}
      />

      <TextField
        id="packagingCost"
        label="packagingCost"
        size="small"
        type="number"
        onChange={customHandleChange}
        value={packagingCost}
      />
      <TextField
        id="priceAfterDiscount"
        label="priceAfterDiscount"
        size="small"
        type="number"
        onChange={customHandleChange}
        value={priceAfterDiscount}
      />
      <TextField
        id="taxPercent"
        label="taxPercent"
        size="small"
        type="number"
        onChange={customHandleChange}
        value={taxPercent}
      />
    </div>
  );
}
