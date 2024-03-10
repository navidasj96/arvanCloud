import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemState } from "../UistateManagment/UiSlice";
import { useUiRedux } from "../utils/getUiState";

interface Props {
  item: { value: number; content: string }[];
}
interface MyObject {
  [key: string]: any;
}
const WeekDaysCheckbox = ({ item }: Props) => {
  const [selectedDays, setSelectedDays] = useState(new Set());
  const [selectedDaysValues, setSelectedDaysValues] = useState(new Set());
  const dispatch = useDispatch();
  const { addItemState } = useUiRedux();
  const handleCheckboxChange = ({
    value,
    content,
  }: {
    value: number;
    content: string;
  }) => {
    const newSelectedDays = new Set(selectedDays);
    const newSelectedDaysvalues = new Set(selectedDaysValues);

    if (newSelectedDays.has(value)) {
      newSelectedDays.delete(value);
    } else {
      newSelectedDays.add(value);
    }
    if (newSelectedDaysvalues.has(value)) {
      newSelectedDaysvalues.delete(value);
    } else {
      newSelectedDaysvalues.add(value);
    }

    // Update the state with the new Set
    setSelectedDays(newSelectedDays);
    setSelectedDaysValues(newSelectedDaysvalues);
  };

  useEffect(() => {
    const uniqueNumbers = Array.from(new Set(selectedDaysValues));
    let newAtrr: MyObject = {};
    newAtrr[`Weekdays`] = uniqueNumbers;
    dispatch(setAddItemState(newAtrr));
  }, [selectedDaysValues, dispatch]);

  // console.log("addItem", addItemState);
  return (
    <div>
      <div>
        {item.map((day) => (
          <label
            key={day.value}
            className="inline-flex items-center mt-3"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={selectedDays.has(day.value)}
              onChange={() => handleCheckboxChange(day)}
            />
            <span className="ml-2">{day.content}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default WeekDaysCheckbox;
