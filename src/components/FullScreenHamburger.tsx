import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  ThemeProvider,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useGetWindowDimensions, useUiRedux } from "../utils/getUiState";
import {
  HamburgerMenuClose,
  HamburgerMenuOpen,
} from "../UistateManagment/UiSlice";
import SidebarOptions from "./Sidebar";
import SettingOptions from "./SettingOptions";

export function FullScreenHamburger() {
  const dispatch = useDispatch();
  const { HamburgerMenuIsOpen } = useUiRedux();
  const { screenWidth } = useGetWindowDimensions();

  const openDrawer = () => dispatch(HamburgerMenuOpen());
  const closeDrawer = () => dispatch(HamburgerMenuClose());
  const theme = {
    drawer: {
      defaultProps: {
        size: screenWidth,
        overlay: true,
        placement: "left",
        overlayProps: undefined,
        className: "w-screen",
        dismiss: undefined,
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
    <div className=" hidden sm:flex xl:hidden">
      <ThemeProvider value={theme}>
        <Drawer
          open={HamburgerMenuIsOpen ? true : false}
          onClose={closeDrawer}
          className="p-4"
          placement="right"
          placeholder={undefined}
        >
          <div className="flex flex-row lg:translate-x-full">
            <div className="flex flex-col items-center gap-[1.5rem] overflow-hidden pt-[1rem] pr-[0.5rem] pb-[0.5rem] z-10 transform bg-[#fff] whitespace-nowrap flex-shrink-0  ">
              <div className="flex flex-col w-[100%] gap-[.5rem] ">
                <SidebarOptions />
              </div>
              <div className="gap-[0.5rem] mt-auto flex flex-col w-[100%]">
                <SettingOptions />
              </div>
            </div>
            {/* sidebar not home */}
            {/* options of sidebarmenus(not home) */}
            <div className="flex flex-col overflow-y-auto overflow-x-hidden whitespace-nowrap w-[216px] bg-[#fff] z-10 border">
              <div className="flex items-center h-[72px] flex-shrink-0 gap-[0.5rem] py-[0rem] px-[.5rem] text-[#333] border"></div>
              <div className="flex flex-col gap-[.25rem] m-0 "></div>
            </div>
          </div>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
