import React from "react";
import IconComponent from "./IconComponent";
const Settingoptions: {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  route: string;
}[] = [
  {
    title: "Setting",
    title_fa: " تنطیمات",
    Icon: "Setting",
    abbrev: "Setting",
    route: "/",
  },
  {
    title: "Book",
    title_fa: "آموزش",
    Icon: "Book",
    abbrev: "CDN",
    route: "/",
  },
  {
    title: "support",
    title_fa: "بشتیبانی",
    Icon: "HeadPhone",
    abbrev: "HeadPhone",
    route: "",
  },
];
export default function SettingOptions() {
  return (
    <div className="flex flex-col w-full ">
      {Settingoptions.map((item) => {
        return (
          <div className="flex  mt-2 flex-col relative items-center color-[#4c4c4c] cursor-pointer w-[56.22px] h-[56px] ">
            <div className="h-[36px] w-[36px] inline-flex items-center justify-center  hover:bg-gray-300 rounded-lg">
              <span className="text-[25px] text-[#4C4C4C]">
                <IconComponent iconName={item.Icon} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
