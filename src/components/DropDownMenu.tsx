import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { useUiRedux } from "../utils/getUiState";
import { setAddItemState } from "../UistateManagment/UiSlice";

interface Props {
  title: string;
  item: { value: number; content: string; name?: string }[];
}
interface MyObject {
  [key: string]: any;
}
export default function BasicSelect({ title, item }: Props) {
  const dispatch = useDispatch();
  const { addItemState } = useUiRedux();
  const [age, setAge] = React.useState<string>(item[0].content);

  const handleChange = (event: SelectChangeEvent) => {
    let newAtrr: MyObject = {};
    newAtrr[`${title}`] = event.target.value;
    dispatch(setAddItemState(newAtrr));
    setAge(event.target.value as string);
  };
  // console.log("addItemState is ", addItemState);

  return (
    <Box sx={{ minWidth: 120, width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={title}
          onChange={handleChange}
        >
          {item.map((option, index) => {
            return (
              <MenuItem
                key={index}
                value={option.name ? option.name : option.value}
              >
                <p className="fontIR">
                  {option.name ? option.name : option.content}
                </p>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
