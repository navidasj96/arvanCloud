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
import { useNavigate } from "react-router-dom";
import { useTranslate } from "../locales/useLocales";
import { setDirection, setLang } from "../UistateManagment/UiSlice";

export function LanguageButton() {
  const { i18n } = useTranslate();
  const dispatch = useDispatch();

  const PersianLang = () => {
    dispatch(setDirection("rtl"));
    const setting = { Direction: "rtl", lang: "fa" };
    localStorage.setItem("setting", JSON.stringify(setting));
    i18n.changeLanguage("fa");
    dispatch(setLang("fa"));
  };
  const EngLang = () => {
    dispatch(setDirection("ltr"));
    const setting = { Direction: "ltr", lang: "en" };
    i18n.changeLanguage("en");

    localStorage.setItem("setting", JSON.stringify(setting));
    dispatch(setLang("en"));
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
