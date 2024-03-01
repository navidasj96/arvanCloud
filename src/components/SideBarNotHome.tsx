import React from "react";
import SettingOptions from "./SettingOptions";
import SidebarOptions from "./Sidebar";
import { useUiRedux } from "../utils/getUiState";
import Menu from "./MenuItems";

const Serveroptions = [
  { main: { title: "ابرک‌ها" }, subMenu: [{ title: "لیست ابرک‌ها" }] },
  {
    main: { title: "شبکه" },
    subMenu: [
      { title: "IP اینترنتی" },
      { title: "شبکه خصوصی" },
      { title: "IP شناور" },
    ],
  },
  {
    main: { title: "امنیت" },
    subMenu: [{ title: "فایروال" }, { title: "کلید  SSH" }],
  },
  {
    main: { title: "مدیریت دیسک" },
    subMenu: [
      { title: "دیسک" },
      { title: "اسنب شات" },
      { title: "بکاب" },
      { title: "سیستم‌عامل شخصی" },
    ],
  },
  {
    main: { title: "راه‌کارهای سازمانی" },
    subMenu: [{ title: "لیست ابرک‌عا" }, { title: "انتقال رنج IP" }],
  },
];
const optionsCDN = [
  { main: { title: "دامنه‌های من" } },
  {
    main: { title: "لیست‌ها" },
  },
  {
    main: { title: "لاگ تغییرات بنل" },
  },
  {
    main: { title: "تنظیمات" },
    subMenu: [{ title: "انتقال دامنه" }],
  },
];
const optionsObjectiveStorage = [
  { main: { title: "بیشخان" } },
  {
    main: { title: "انتخاب بسته" },
  },
  {
    main: { title: "مدیریت دسترسی" },
  },
  {
    main: { title: "صندوقچه‌ها" },
  },
  {
    main: { title: "بانک پالیسی" },
    subMenu: [{ title: "مدیریت پالیسی" }, { title: "مدیریت کاربران" }],
  },
  {
    main: { title: "نقطه دسترسی" },
  },
  {
    main: { title: "صندوقچه دانلود" },
  },
  {
    main: { title: "استاتیک وب‌سایت" },
  },
  {
    main: { title: "ابزار و راهنما" },
  },
];

export default function SideBarNotHome() {
  const { ActiveSession } = useUiRedux();
  let options = optionsCDN;
  if (ActiveSession === "CDN") options = optionsCDN;
  if (ActiveSession === "Cloud Server") options = Serveroptions;
  if (ActiveSession === "Objective Storage") options = optionsObjectiveStorage;
  return (
    <>
      <div
        className={`${
          ActiveSession === "Home" && "hidden"
        } flex flex-col items-center justify-between  gap-[1.5rem] overflow-hidden pt-[1rem] pr-[0.5rem] pb-[0.5rem] z-10 transform bg-[#fff] whitespace-nowrap flex-shrink-0 box-border w-[76px] `}
      >
        <div className="flex flex-col w-[100%] gap-[.5rem] box-border ">
          <SidebarOptions />
        </div>

        <div className="gap-[0.5rem]  mt-[100%] flex flex-col w-[100%] box-border">
          <SettingOptions />
        </div>
      </div>
      {/* sidebar not home */}
      {/* options of sidebarmenus(not home) */}
      <div
        className={`${
          ActiveSession === "Home" && "hidden"
        }  flex-col overflow-y-auto overflow-x-hidden whitespace-nowrap w-[216px] bg-[#fff] z-10 border`}
      >
        <div className="flex items-center h-[72px] flex-shrink-0 gap-[0.5rem] py-[0rem] px-[.5rem] text-[#333] border"></div>
        <div className="flex flex-col gap-[.25rem] m-0 ">
          <Menu options={options} />
        </div>
      </div>
    </>
  );
}
