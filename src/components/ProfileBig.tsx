import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React, { useState } from "react";
import IconComponent from "./IconComponent";

export default function ProfileBig() {
  return (
    <Popover>
      <PopoverHandler>
        <div
          className={`  w-[176px] border   h-[36px] justify-center  inline-flex items-center   hover:bg-gray-300 rounded-lg cursor-pointer`}
        >
          <span className={` text-[20px] text-[#4C4C4C] `}>
            <IconComponent iconName="Profile" />
          </span>

          <div className="text-[10px] font-[300] tracking-[-.2px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[100%] text-[#333] mr-2">
            نام و نام خانوادگی
          </div>
        </div>
      </PopoverHandler>
      <PopoverContent
        className="z-[999] grid w-[284px] h-[90px] rounded-lg box-border grid-cols-2 overflow-hidden p-0"
        placeholder={undefined}
      >
        <div className="flex flex-col gap-[2px] min-w-[284px] p-[.5rem] shadow-md bg-white ">
          <div className="p-[.5rem] rounded-lg text-[16px] font-[400] tracking-[-.28px] flex items-center gap-[.5rem] w-[100%] text-[#333] rtl fontIR hover:bg-[#00a7a71a] cursor-pointer">
            حساب کاربری
          </div>
          <div className="p-[.5rem] rounded-lg text-[16px] font-[400] tracking-[-.28px] flex items-center gap-[.5rem] w-[100%] text-[#333] rtl fontIR hover:bg-[#00a7a71a] cursor-pointer">
            خروج
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
