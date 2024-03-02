import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React from "react";
import IconComponent from "./IconComponent";

export default function WalletBig() {
  return (
    <Popover>
      <PopoverHandler>
        <div
          className={`  w-[176px] border   h-[36px] justify-center  inline-flex items-center   hover:bg-gray-300 rounded-lg cursor-pointer`}
        >
          <span className={` text-[20px] text-[#4C4C4C] ml-auto mr-2 `}>
            <IconComponent iconName="Wallet" />
          </span>

          <div className="text-[10px] font-[300] tracking-[-.2px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[100%] text-[#333] mr-2 ml-2">
            0 ریال
          </div>
        </div>
      </PopoverHandler>
      <PopoverContent
        className="z-[999] grid h-[284px] w-[240px] rounded-lg box-border grid-cols-2 overflow-hidden p-0"
        placeholder={undefined}
      >
        <div className="flex flex-col gap-[2px] min-w-[240px] p-[.5rem] shadow-md bg-white ">
          <div className="p-[.5rem] rounded-lg text-[16px] font-[400] tracking-[-.28px] leading-[20px] flex items-center gap-[.5rem]   text-[#333]  fontIR hover:bg-[#00a7a71a] cursor-pointer rtl">
            پرداخت و افزایش اعتبار{" "}
          </div>
          <div className="p-[.5rem] rounded-lg text-[16px] font-[400] tracking-[-.28px] flex items-center gap-[.5rem] w-[100%] text-[#333]  fontIR hover:bg-[#00a7a71a] cursor-pointer rtl">
            کد هدیه
          </div>
          <div className="p-[.5rem] rounded-lg text-[16px] font-[400] tracking-[-.28px] flex items-center gap-[.5rem] w-[100%] text-[#333]  fontIR hover:bg-[#00a7a71a] cursor-pointer rtl">
            کد تخفیف
          </div>
          <div className="p-[.5rem] rounded-lg text-[16px] font-[400] tracking-[-.28px] flex items-center gap-[.5rem] w-[100%] text-[#333]  fontIR hover:bg-[#00a7a71a] cursor-pointer rtl">
            فاکتورها
          </div>
          <div className="p-[.5rem] rounded-lg text-[16px] font-[400] tracking-[-.28px] flex items-center gap-[.5rem] w-[100%] text-[#333]  fontIR hover:bg-[#00a7a71a] cursor-pointer rtl">
            تراکنش ها
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
