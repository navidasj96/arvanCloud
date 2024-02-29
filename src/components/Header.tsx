import React from "react";
import IconComponent from "./IconComponent";
import { useDispatch } from "react-redux";
import {
  HamburgerMenuOpen,
  setProfileModalOpen,
} from "../UistateManagment/UiSlice";

const leftOptionsSmall: {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  route: string;
}[] = [
  {
    title: "Profile",
    title_fa: "بروفایل",
    Icon: "Profile",
    abbrev: "بروفایل",
    route: "/",
  },
  {
    title: "Notification",
    title_fa: "نوتیفیکیشن",
    Icon: "Bell",
    abbrev: "Notif",
    route: "/cdn/domains",
  },
  {
    title: "Code",
    title_fa: "Code",
    Icon: "Code",
    abbrev: "Code",
    route: "/ecc",
  },
];
const rightOptionsSmall: {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  route: string;
}[] = [
  {
    title: "Search",
    title_fa: "Search",
    Icon: "Search",
    abbrev: "Search",
    route: "/",
  },
  {
    title: "Menu",
    title_fa: "Menu",
    Icon: "Menu",
    abbrev: "Menu",
    route: "/Menu/domains",
  },
];

const LeftOptionsBig: {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  route: string;
}[] = [
  {
    title: "Profile",
    title_fa: "Profile",
    Icon: "Profile",
    abbrev: "Profile",
    route: "/",
  },
  {
    title: "Wallet",
    title_fa: "Wallet",
    Icon: "Wallet",
    abbrev: "Wallet",
    route: "Wallet",
  },
  {
    title: "Calculator",
    title_fa: "Calculator",
    Icon: "Calculator",
    abbrev: "Calculator",
    route: "Calculator",
  },
  {
    title: "Bell",
    title_fa: "Bell",
    Icon: "Bell",
    abbrev: "Bell",
    route: "Bell",
  },
  {
    title: "Code",
    title_fa: "Code",
    Icon: "Code",
    abbrev: "Code",
    route: "Code",
  },
];

export default function Header() {
  const dispatch = useDispatch();
  const RightSmallHandler = (title: string) => {
    dispatch(HamburgerMenuOpen());
  };

  const LeftOptionClickHandler = (title: string) => {
    if (title === "Profile") {
      dispatch(setProfileModalOpen());
    }
  };
  return (
    <div className="sticky top-0 z-[1] box-border">
      <div className="flex items-center justify-between gap-[1rem] py-[0.5rem] px-[0.5rem] bg-[#fff] border min-h-[52px]">
        <div className="flex flex-row-reverse items-center gap-[0.5rem] lg:hidden">
          {rightOptionsSmall.map((item) => {
            return (
              <div
                onClick={() => RightSmallHandler(item.title)}
                className="h-[36px] w-[36px] inline-flex items-center justify-center  hover:bg-gray-300 rounded-lg"
              >
                <span className="text-[20px] text-[#4C4C4C]">
                  <IconComponent iconName={item.Icon} />
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row-reverse items-center gap-[0.5rem] lg:hidden">
          {leftOptionsSmall.map((item) => {
            return (
              <div
                onClick={() => LeftOptionClickHandler(item.title)}
                className="h-[36px] w-[36px] inline-flex items-center justify-center  hover:bg-gray-300 rounded-lg"
              >
                <span className="text-[20px] text-[#4C4C4C]">
                  <IconComponent iconName={item.Icon} />
                </span>
              </div>
            );
          })}
        </div>
        {/* big items from here -------------------------------------- */}

        <div className=" flex-row-reverse items-center gap-[0.5rem] hidden lg:flex lg:mr-auto">
          {LeftOptionsBig.map((item) => {
            return (
              <div
                className={`h-[36px] w-[36px] justify-center  inline-flex items-center   hover:bg-gray-300 rounded-lg`}
              >
                <span className="text-[20px] text-[#4C4C4C]">
                  <IconComponent iconName={item.Icon} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
