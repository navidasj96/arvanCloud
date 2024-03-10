import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";

import { setAddItemState } from "../UistateManagment/UiSlice";
import { useUiRedux } from "../utils/getUiState";

export const Tags = () => {
  const [fields, setFields] = useState([{ value: "" }]);
  const { addItemState } = useUiRedux();
  const dispatch = useDispatch();
  // console.log("ProductTages", addItemState);

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleChange = (index: any, newValue: any) => {
    const updatedFields = [...fields];
    updatedFields[index].value = newValue;
    setFields(updatedFields);
    // console.log("updatedFields", updatedFields);
  };
  //   console.log(fields);

  useEffect(() => {
    let tag: any = [];
    Object.entries(fields).map(([key, value]) => {
      if (value.value) {
        tag.push(value.value);
      }
      return null;
    });
    dispatch(setAddItemState({ tag: tag }));
  }, [fields]);

  return (
    <div className="w-full">
      {fields.map((field, index) => (
        <div
          key={index}
          className="flex flex-col py-2 fontIR"
        >
          <TextField
            label={`توضیحات ${index + 1}`}
            variant="outlined"
            value={field.value}
            multiline
            onChange={(e) => handleChange(index, e.target.value)}
            sx={{ fontFamily: "fontIR" }}
          />
        </div>
      ))}
      <IconButton onClick={handleAddField}>
        <IoIosAddCircleOutline />{" "}
      </IconButton>
    </div>
  );
};
