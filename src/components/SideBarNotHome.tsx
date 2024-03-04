import React, { Suspense } from "react";
import SettingOptions from "./SettingOptions";
import SidebarOptions from "./Sidebar";
import { useUiRedux } from "../utils/getUiState";
import Menu from "./MenuItems";
import { useTranslation } from "react-i18next";

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
  const { ActiveSession, theme } = useUiRedux();
  const { t } = useTranslation();
  const optionsCDN = [
    { main: { title: t("my_Domains") } },
    {
      main: { title: t("lists") },
    },
    {
      main: { title: t("Audit_Logs") },
    },
    {
      main: { title: t("Setting") },
      subMenu: [{ title: t("Domain_Transfer") }],
    },
  ];
  const Serveroptions = [
    {
      main: { title: t("instances") },
      subMenu: [{ title: t("Instance_list") }],
    },
    {
      main: { title: t("network") },
      subMenu: [
        { title: t("intenet_ip") },
        { title: t("private_network") },
        { title: t("float_ip") },
      ],
    },
    {
      main: { title: t("security") },
      subMenu: [{ title: t("fireWall") }, { title: t("SSH_key") }],
    },
    {
      main: { title: t("disk_management") },
      subMenu: [
        { title: t("volume") },
        { title: t("snapshot") },
        { title: t("backup") },
        { title: t("custom_image") },
      ],
    },
    {
      main: { title: t("enterprise_solution") },
      subMenu: [{ title: t("byoip") }],
    },
  ];
  let options = optionsCDN;
  if (ActiveSession === "CDN") options = optionsCDN;
  if (ActiveSession === "Cloud Server") options = Serveroptions;
  if (ActiveSession === "Objective Storage") options = optionsObjectiveStorage;
  return (
    <>
      <div
        className={`${
          ActiveSession === "Home" && "hidden"
        } flex flex-col items-center justify-between  gap-[1.5rem] overflow-hidden pt-[1rem] pr-[0.5rem] pb-[0.5rem] z-10 transform bg-[#fff] ${
          theme === "night" && "night_Mode"
        } whitespace-nowrap flex-shrink-0 box-border w-[76px] `}
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
        }  flex-col overflow-y-auto overflow-x-hidden whitespace-nowrap w-[216px] bg-[#fff] ${
          theme === "night" && "night_Mode border-gray-700"
        } z-10 border`}
      >
        <div
          className={`flex items-center h-[72px] flex-shrink-0 gap-[0.5rem] py-[0rem] px-[.5rem] text-[#333] border ${
            theme === "night" && "border-gray-700"
          }`}
        ></div>
        <div className="flex flex-col gap-[.25rem] m-0 ">
          <Menu options={options} />
        </div>
      </div>
    </>
  );
}
