import React from "react";
import SidebarOptions from "./Sidebar";
import SettingOptions from "./SettingOptions";
import { useUiRedux } from "../utils/getUiState";
import IconComponent from "./IconComponent";
import { useDispatch } from "react-redux";
import { HamburgerMenuClose } from "../UistateManagment/UiSlice";

export default function MiniSideBar() {
  const { HamburgerMenuIsOpen } = useUiRedux();
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed top-0 h-[100dvh] w-[100%] md:w-auto box-border transition-all z-[2] ${
        HamburgerMenuIsOpen && "translate-x-0 "
      } ${!HamburgerMenuIsOpen && "translate-x-full"} `}
    >
      <div className="flex flex-col items-center gap-[1.5rem] overflow-hidden pt-[1rem] pr-[0.5rem] pb-[0.5rem] z-10 transform bg-[#fff] whitespace-nowrap flex-shrink-0  ">
        <div className="flex flex-col w-[100%] gap-[.5rem] ">
          <SidebarOptions />
        </div>
        <div className="gap-[0.5rem] mt-auto flex flex-col w-[100%]">
          <SettingOptions />
        </div>
      </div>
      {/* sidebar not home */}
      {/* options of sidebarmenus(not home) */}
      <div className="flex flex-col overflow-y-auto overflow-x-hidden whitespace-nowrap w-[216px] bg-[#fff] z-10 border">
        <div className="flex items-center h-[72px] flex-shrink-0 gap-[0.5rem] py-[0rem] px-[.5rem] text-[#333] border"></div>
        <div className="flex flex-col gap-[.25rem] m-0 "></div>
      </div>
    </div>
  );
}
