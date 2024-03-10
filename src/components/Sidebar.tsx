import React from "react";
import IconComponent from "./IconComponent";
import { useDispatch } from "react-redux";
import {
  HamburgerMenuClose,
  setActiveSession,
} from "../UistateManagment/UiSlice";
import { useUiRedux } from "../utils/getUiState";
import { useRouter } from "../routes/sections/hooks/use-router";
import { useTranslate } from "../locales/useLocales";

export default function SidebarOptions() {
  const { t } = useTranslate();
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
      route: "/add-item",
    },
    {
      title: "Cloud Server",
      title_fa: " سرور ابری",
      Icon: "Cloud_Server",
      abbrev: "Server",
      route: "/",
    },
    {
      title: "Objective Storage",
      title_fa: " فضای ابری",
      Icon: "Objective_Storage",
      abbrev: "Storage",
      route: "/",
    },
    {
      title: "Cloud Container",
      title_fa: "کانتینر ابری",
      Icon: "Cloud_Container",
      abbrev: "Container",
      route: "/",
    },
    {
      title: "Video Platform ",
      title_fa: "بلتفرم ویدیو",
      Icon: "Video_Platform",
      abbrev: "Video",
      route: "/",
    },
    {
      title: "Managed Database",
      title_fa: "دیتابیس ابری",
      Icon: "Managed_Database",
      abbrev: "Database",
      route: "/",
    },
  ];
  const { ActiveSession, HamburgerMenuIsOpen } = useUiRedux();
  const router = useRouter();
  const dispatch = useDispatch();
  const OnclickHandler = (item: { title: string; route: string }) => {
    router.push(item.route);
    // console.log("item path is", item.route);

    dispatch(setActiveSession(item.title));
  };
  return (
    <div className="flex flex-col w-full ">
      {HamburgerMenuIsOpen && (
        <div
          onClick={() => dispatch(HamburgerMenuClose())}
          className="flex  mt-2 flex-col relative items-center color-[#4c4c4c] cursor-pointer w-[56.22px] h-[56px] "
        >
          <div
            className={`h-[36px] w-[36px] inline-flex items-center justify-center hover:bg-gray-300 "bg-gray-300"
         } rounded-lg`}
          >
            <span className="text-[25px] text-[#4C4C4C]">
              <IconComponent iconName={"Close"} />
            </span>
          </div>
        </div>
      )}
      {MainMenuoptions.map((item) => {
        return (
          <div
            onClick={() => OnclickHandler(item)}
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
