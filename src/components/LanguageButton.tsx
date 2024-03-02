import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import IconComponent from "./IconComponent";
import { useDispatch } from "react-redux";
import { useUiRedux } from "../utils/getUiState";
import { setLangEng, setLangPer } from "../UistateManagment/UiSlice";
import { useNavigate } from "react-router-dom";

export function LanguageButton() {
  const dispatch = useDispatch();
  const { Direction } = useUiRedux();
  const PersianLang = () => {
    dispatch(setLangPer());
  };
  const EngLang = () => {
    dispatch(setLangEng());
  };
  return (
    <Menu>
      <MenuHandler>
        <button className="text-[#4C4C4C]">
          <IconComponent iconName="Globe" />
        </button>
      </MenuHandler>
      <MenuList placeholder={undefined}>
        <MenuItem
          placeholder={undefined}
          className="fontIR"
          onClick={PersianLang}
        >
          فارسی
        </MenuItem>
        <MenuItem
          onClick={EngLang}
          placeholder={undefined}
          className="fontIR"
        >
          English{" "}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
