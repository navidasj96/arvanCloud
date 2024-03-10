import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setAddItemState } from "../UistateManagment/UiSlice";
import { useUiRedux } from "../utils/getUiState";
import { TextField } from "@mui/material";
import { useFormRedux } from "../utils/getFormState";
import * as Yup from "yup";

interface Props {
  item: { name: string; id: number; serviceType: number };
}
interface MyObject {
  [key: string]: any;
}
export default function ItemPriceFormTemplate({ item }: Props) {
  const validationSchema = Yup.object().shape({
    // Other fields in your form

    packagingCost: Yup.number()
      .min(0, "packagingCost must not be below zero")
      .required("packagingCost is required"),

    price: Yup.number()
      .min(0, "price must not be below zero")
      .required("price is required"),
    priceAfterDiscount: Yup.number()
      .min(0, "priceAfterDiscount must not be below zero")
      .required("priceAfterDiscount is required"),
    taxPercent: Yup.number()
      .min(0, "taxPercent must not be below zero")
      .required("taxPercent is required"),
    // Add other fields as needed
  });
  const dispatch = useDispatch();
  const { addItemState } = useUiRedux();
  const { formState } = useFormRedux();
  // console.log("formState", formState);
  // console.log("addItemState", addItemState);

  const {
    values,
    handleChange,
    submitForm,
    touched,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      price: 0,
      priceAfterDiscount: 0,
      packagingCost: 0,
      taxPercent: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log("submitted values", values);

      const { packagingCost, price, priceAfterDiscount, taxPercent } = values;
      // Handle form submission logic here

      let optionArr: MyObject = {};
      const info = {
        serviceTypeId: item.serviceType,
        price,
        packagingCost,
        taxPercent,
        priceAfterDiscount,
      };
      optionArr[`serviceType${item.serviceType}`] = info;
      dispatch(setAddItemState(optionArr));
    },
  });

  useEffect(() => {
    setFieldValue("price", formState.price);
    // console.log("price has changed");
  }, [formState.price, setFieldValue]);
  useEffect(() => {
    setFieldValue("priceAfterDiscount", formState.priceAfterDiscount);
  }, [formState.priceAfterDiscount, setFieldValue]);
  useEffect(() => {
    setFieldValue("packagingCost", formState.packagingCost);
  }, [formState.packagingCost, setFieldValue]);

  useEffect(() => {
    setFieldValue("taxPercent", formState.taxPercent);
  }, [formState.taxPercent, setFieldValue]);

  const customChangeHandler = (event: any) => {
    handleChange(event);
    submitForm();
  };
  var {
    packagingCost,

    price,
    priceAfterDiscount,
    taxPercent,
  } = values;

  useEffect(() => {
    submitForm();
  }, [values, submitForm]);
  return (
    <div className="w-full grid grid-cols-4 gap-4 ">
      <div className="flex flex-col">
        <TextField
          id="price"
          size="small"
          type="number"
          onBlur={handleBlur}
          onChange={customChangeHandler}
          value={price}
        />
      </div>

      <TextField
        id="packagingCost"
        size="small"
        type="number"
        onBlur={handleBlur}
        onChange={customChangeHandler}
        value={packagingCost}
      />
      <TextField
        id="priceAfterDiscount"
        size="small"
        type="number"
        onBlur={handleBlur}
        onChange={customChangeHandler}
        value={priceAfterDiscount}
      />
      <TextField
        id="taxPercent"
        size="small"
        type="number"
        onBlur={handleBlur}
        onChange={customChangeHandler}
        value={taxPercent}
      />
    </div>
  );
}
