import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { useUiRedux } from "./utils/getUiState";
import { setAddItemState } from "./UistateManagment/UiSlice";

interface Props {
  title: string;
  item: { id: number; name: string }[];
  serviceType: number;
}
interface MyObject {
  [key: string]: any;
}
export default function BasicSelect({ title, item, serviceType }: Props) {
  const dispatch = useDispatch();
  const { addItemState } = useUiRedux();
  const [age, setAge] = React.useState<string>();
  // console.log("addItemState", addItemState);

  const handleChange = (event: SelectChangeEvent) => {
    // console.log("eveten.target.value", event.target.value);
    setAge(event.target.value as string);

    let newAtrr: MyObject = {};
    let printerObj: any = {};
    newAtrr[`serviceTypeId`] = serviceType;

    newAtrr["printerId"] = event.target.value;
    const key = `printer${serviceType}`;

    printerObj[key] = newAtrr;
    dispatch(setAddItemState(printerObj));
    // console.log("evente.target", event.target);
  };
  // console.log("addItemState is ", addItemState);
  // const menuClickHandler = (option: any) => {
  //   console.log("onclick printer", option);
  //   //     let newAtrr: MyObject = {};
  //   //     newAtrr[`PrinterType${serviceType}`] = serviceType;
  //   //     newAtrr["printerId"] = option.id;
  //   //     console.log("printer att", newAtrr);
  //   // const attKey = `PrinterType${serviceType}`
  //   //     dispatch(setAddItemState( attKey : newAtrr));
  // };
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
                value={option.id}
              >
                <p className="fontIR">{option.name}</p>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
