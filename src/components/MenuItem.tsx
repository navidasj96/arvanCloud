import React, { useEffect, useState } from "react";
import IconComponent from "./IconComponent";
import { useDispatch } from "react-redux";
import {
  setActiveSideMenu,
  setSelectedOption,
} from "../UistateManagment/UiSlice";
import { useUiRedux } from "../utils/getUiState";

interface Props {
  item: {
    main: {
      title: string;
    };
    subMenu?: {
      title: string;
    }[];
  };
}
export default function MenuItem({ item }: Props) {
  const [clicked, setClicked] = useState(false);
  const subMenuCount = item.subMenu ? item.subMenu.length : 0;
  const { ActiveSideMenu, selectedOption, Direction } = useUiRedux();
  const rtl = Direction === "rtl";
  const dispatch = useDispatch();
  const onClickHandler = () => {
    setClicked((prev) => !prev);
    dispatch(setActiveSideMenu(item.main.title));
    dispatch(setActiveSideMenu(item.main.title));
  };
  const OptionsSelectHandler = (title: string) => {
    if (item.subMenu && item.subMenu) dispatch(setSelectedOption(title));
  };
  useEffect(() => {
    if (ActiveSideMenu !== item.main.title) setClicked(false);
  }, [ActiveSideMenu, item.main.title]);
  return (
    <li className="box-border flex flex-col space-y-2 ">
      <div
        onClick={onClickHandler}
        className=" box-border relative  p-[.5rem] flex items-center gap-1 text-[4c4c4c] 
  rounded-lg cursor-pointer fontIR hover:bg-[#00a7a71a] "
      >
        {item.subMenu && item.subMenu.length > 0 && (
          <div
            className={`box-border rounded-full bg-[#00a7a71a] h-[16px]
     w-[16px] flex items-center justify-center ${
       clicked && "-rotate-90"
     } transition-all`}
          >
            <IconComponent iconName="ArrowLeft" />
          </div>
        )}
        <div className="box-border text-[16px] font-[500] leading-[16px] tracking-[-.24px]">
          {item.main.title}
        </div>
      </div>
      <div
        className={`block overflow-hidden space-y-2  transition-[height] `}
        style={{ height: clicked ? 32 * subMenuCount + subMenuCount * 8 : 0 }}
      >
        {item.subMenu && item.subMenu.length > 0 && (
          <>
            {item.subMenu.map((option, index) => {
              return (
                <div
                  onClick={() => OptionsSelectHandler(option.title)}
                  key={index}
                  className={` box-border  relative   p-[.5rem] flex items-center gap-1 text-[4c4c4c] 
        rounded-lg cursor-pointer fontIR hover:bg-[#00a7a71a] ${
          selectedOption === option.title && "bg-[#00a7a71a] "
        } `}
                >
                  <div
                    className={`box-border text-[16px] font-[500] leading-[16px] tracking-[-.24px] ${
                      rtl && "pr-8"
                    } ${!rtl && "pl-8"}`}
                  >
                    {selectedOption === option.title && (
                      <div
                        className={`w-[5px] absolute ${rtl && "right-[7px]"} ${
                          !rtl && "left-[7px]"
                        } top-[5px] h-[20px] border rounded-lg bg-gray-500`}
                      ></div>
                    )}
                    {option.title}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </li>
  );
}
