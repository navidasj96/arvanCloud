import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormContainer from "./FormContainer";
import { Input } from "@material-tailwind/react";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   itemCode: Yup.string().required("Item Code is required"),
//   // Add more validation for other fields as needed
// });

const AddItemForm = () => {
  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      itemCode: "",
      description: "",
      preparationTime: 0,
      mealType: 0,
      dailyInventory: 0,
      fixDailyInventory: 0,
      lable: 0,
    },
    onSubmit: (values) => {
      // Handle form submission logic here
      // console.log("Form submitted:", values);
    },
  });

  const {
    description,
    itemCode,
    name,
    preparationTime,
    mealType,
    dailyInventory,
    fixDailyInventory,
    lable,
  } = values;

  return (
    <div className="container mx-auto mt-8">
      <FormContainer
        title="اضافه کردن آیتم"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-4">
          <Input
            label="name"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          <Input
            label="Item code"
            type="text"
            id="itemCode"
            name="itemCode"
            value={itemCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          <Input
            label="Description"
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          <Input
            label="Prepration Time"
            type="number"
            id="preparationTime"
            name="preparationTime"
            value={preparationTime}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          <Input
            label="meal Type"
            type="number"
            id="mealType"
            name="mealType"
            value={mealType}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          <Input
            label="Daily Inventory"
            type="number"
            id="dailyInventory"
            name="dailyInventory"
            value={dailyInventory}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          <Input
            label="fix Daily Inventory"
            type="number"
            id="fixDailyInventory"
            name="fixDailyInventory"
            value={fixDailyInventory}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          <Input
            label="lable"
            type="number"
            id="lable"
            name="lable"
            value={lable}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
          />
          {/* {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )} */}
        </div>
        {/* Add more fields with similar structure */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </FormContainer>
    </div>
  );
};

export default AddItemForm;
