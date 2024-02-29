import React from "react";
import IconComponent from "./IconComponent";
import { useDispatch } from "react-redux";
import { setActiveSession } from "../UistateManagment/UiSlice";
import { useUiRedux } from "../utils/getUiState";
const MainMenuoptions: {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  route: string;
}[] = [
  {
    title: "Home",
    title_fa: "صفحه اصلی",
    Icon: "Home",
    abbrev: "Home",
    route: "/",
  },
  {
    title: "CDN",
    title_fa: "شبکه توزیع محتوا",
    Icon: "CDN",
    abbrev: "CDN",
    route: "/cdn/domains",
  },
  {
    title: "Cloud Server",
    title_fa: " سرور ابری",
    Icon: "Cloud_Server",
    abbrev: "Server",
    route: "/ecc",
  },
  {
    title: "Objective Storage",
    title_fa: " فضای ابری",
    Icon: "Objective_Storage",
    abbrev: "Storage",
    route: "storage",
  },
  {
    title: "Cloud Container",
    title_fa: "کانتینر ابری",
    Icon: "Cloud_Container",
    abbrev: "Container",
    route: "paas",
  },
  {
    title: "Video Platform ",
    title_fa: "بلتفرم ویدیو",
    Icon: "Video_Platform",
    abbrev: "Video",
    route: "video",
  },
  {
    title: "Managed Database",
    title_fa: "دیتابیس ابری",
    Icon: "Managed_Database",
    abbrev: "Database",
    route: "dbaas",
  },
];
export default function SidebarOptions() {
  const { ActiveSession } = useUiRedux();

  const dispatch = useDispatch();
  const OnclickHandler = (title: string) => {
    dispatch(setActiveSession(title));
  };
  return (
    <div className="flex flex-col w-full ">
      {MainMenuoptions.map((item) => {
        return (
          <div
            onClick={() => OnclickHandler(item.title)}
            className="flex  mt-2 flex-col relative items-center color-[#4c4c4c] cursor-pointer w-[56.22px] h-[56px] "
          >
            <div
              className={`h-[36px] w-[36px] inline-flex items-center justify-center hover:bg-gray-300 ${
                ActiveSession === item.title && "bg-gray-300"
              } rounded-lg`}
            >
              <span className="text-[25px] text-[#4C4C4C]">
                <IconComponent iconName={item.Icon} />
              </span>
            </div>
            <div className="flex-grow text-[12px] font-[600] text-[#4C4C4C]">
              {item.abbrev}
            </div>
          </div>
        );
      })}
    </div>
  );
}
