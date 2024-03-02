import React from "react";
import { Drawer, ThemeProvider } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useUiRedux } from "../utils/getUiState";
import {
  HamburgerMenuClose,
  HamburgerMenuOpen,
} from "../UistateManagment/UiSlice";
import SidebarOptions from "./Sidebar";
import SettingOptions from "./SettingOptions";
import MenuItems from "./MenuItems";
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

export function DrawerDefault() {
  const dispatch = useDispatch();
  const { HamburgerMenuIsOpen, Direction } = useUiRedux();
  const rtl = Direction === "rtl";
  const openDrawer = () => dispatch(HamburgerMenuOpen());
  const closeDrawer = () => dispatch(HamburgerMenuClose());
  const { ActiveSession } = useUiRedux();
  let options = optionsCDN;
  if (ActiveSession === "CDN") options = optionsCDN;
  if (ActiveSession === "Cloud Server") options = Serveroptions;
  if (ActiveSession === "Objective Storage") options = optionsObjectiveStorage;
  const theme = {
    drawer: {
      defaultProps: {
        size: 300,
        overlay: true,
        placement: "left",
        overlayProps: undefined,
        className: "",

        onClose: undefined,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      },
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-[9999]",
            pointerEvents: "pointer-events-auto",

            backgroundColor: "bg-white",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
          },
          overlay: {
            position: "absolute",
            inset: "inset-0",
            width: "w-full",
            height: "h-full",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
            backgroundColor: "bg-black",
            backgroundOpacity: "bg-opacity-60",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };
  return (
    <div className=" flex lg:hidden">
      <ThemeProvider value={theme}>
        <Drawer
          open={HamburgerMenuIsOpen ? true : false}
          onClose={closeDrawer}
          className=""
          placement={rtl ? "right" : "left"}
          placeholder={undefined}
        >
          <div className="flex flex-row h-full lg:translate-x-full">
            <div
              className={`flex flex-col  items-center gap-[1.5rem] overflow-hidden z-10 transform bg-[#fff] whitespace-nowrap flex-shrink-0 ${
                rtl && "border-l "
              } ${!rtl && "border-r "} `}
            >
              <div className="flex flex-col w-[100%] gap-[.5rem] ">
                <SidebarOptions />
              </div>
              <div className="gap-[0.5rem] mt-auto flex flex-col w-[100%]">
                <SettingOptions />
              </div>
            </div>
            {/* sidebar not home */}
            {/* options of sidebarmenus(not home) */}
            <div className="flex flex-col overflow-y-auto overflow-x-hidden whitespace-nowrap w-[216px] bg-[#fff] z-10 ">
              <div className="flex items-center h-[72px] flex-shrink-0 gap-[0.5rem] py-[0rem] px-[.5rem] text-[#333] "></div>
              <div className="flex flex-col gap-[.25rem] m-0 ">
                {ActiveSession !== "Home" && <Menu options={options} />}
              </div>
            </div>
          </div>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
