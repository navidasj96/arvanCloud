import React from "react";
import IconComponent from "./IconComponent";
import { useUiRedux } from "../utils/getUiState";
import { useDispatch } from "react-redux";
import { setActiveSession } from "../UistateManagment/UiSlice";
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

const SettingMenuoptions: {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  route: string;
}[] = [
  {
    title: "Setting",
    title_fa: "تنظیمات",
    Icon: "Setting",
    abbrev: "Home",
    route: "/",
  },
  {
    title: "CDN",
    title_fa: "آموزش",
    Icon: "Book",
    abbrev: "CDN",
    route: "/cdn/domains",
  },
  {
    title: "Cloud Server",
    title_fa: " پشتیبانی",
    Icon: "HeadPhone",
    abbrev: "Server",
    route: "/ecc",
  },
];
export default function HomeSidebar() {
  const { ActiveSession } = useUiRedux();
  const dispatch = useDispatch();
  const OnclickHandler = (title: string) => {
    dispatch(setActiveSession(title));
  };
  return (
    <div
      className={`bg-white box-border top-0 flex h-[100dvh] w-[100%] relative ${
        ActiveSession !== "Home" && "hidden"
      }`}
    >
      <div className="flex flex-col w-[240px] items-center gap-[1.5rem] overfilow pt-[1rem] pr-[.5rem] pb-[0.5rem] border z-10 whitespace-nowrap flex-shrink-0 box-border will-change-transform">
        <div className="flex flex-col w-[100%] gap-[1rem] box-border">
          {MainMenuoptions.map((item, index) => {
            return (
              <div
                onClick={() => OnclickHandler(item.title)}
                key={index}
                className="relative flex flex-row gap-[.5rem] items-center cursor-pointer box-border"
              >
                <div
                  className={`${
                    item.title === "Home" && "bg-[#e0f7f7]"
                  } text-[30px] box-border inline-flex items-center justify-center rounded-lg h-[40px] w-[40px]`}
                >
                  <IconComponent iconName={item.Icon} />
                </div>
                <div
                  className={`flex-grow  cursor-pointer whitespace-normal box-border`}
                >
                  <div
                    className={`text-[16px] font-[325] leading-[20px] tracking-[-.28px] box-border ${
                      item.title === "Home" && "text-[#009595]"
                    }	`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`text-[14px] font-[325] leading-[16px] tracking-[-.24px] box-border ${
                      item.title === "Home" && "text-[#009595]"
                    }	`}
                  >
                    {item.title_fa}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-[100%] gap-[0.5rem] mt-auto">
          {SettingMenuoptions.map((item, index) => {
            return (
              <div
                onClick={() => OnclickHandler(item.title)}
                key={index}
                className="relative flex flex-row gap-[.5rem] items-center cursor-pointer box-border"
              >
                <div
                  className={`${
                    item.title === "Home" && "bg-[#e0f7f7]"
                  } text-[25px] box-border inline-flex items-center justify-center rounded-lg`}
                >
                  <IconComponent iconName={item.Icon} />
                </div>
                <div
                  className={`flex-grow color-[#009595]  cursor-pointer whitespace-normal`}
                >
                  <div className="text-[12px] font-[325] leading-[16px] tracking-[-.28px]	">
                    {item.title_fa}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
