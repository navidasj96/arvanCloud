import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

import { useDispatch } from "react-redux";
import {
  HamburgerMenuClose,
  setMiniSearchModalClose,
  setNotificationModalClose,
  setProfileModalClose,
} from "./UistateManagment/UiSlice";
import { UseGetWindowsWidth, useUiRedux } from "./utils/getUiState";
import ProfileModal from "./modals.tsx/ProfileModal";
import HomeSidebar from "./components/HomeSidebar";
import DropDown from "./components/DropDown";
import { DrawerDefault } from "./components/HalfScreenHamburger";
import MiniNotification from "./components/MiniNotification";
import { MiniSearchBar } from "./components/MiniSearchbar";
import SideBarNotHome from "./components/SideBarNotHome";
import { useQuery } from "@tanstack/react-query";
import { SearchBig } from "./components/SearchBig";
const fetchData = async () => {
  return new Promise((res, rej) => {
    if (res) {
      res("hello");
    }
    if (rej) {
      rej("error");
    }
  });
};

function App() {
  const dispatch = useDispatch();
  const { Direction } = useUiRedux();
  const { screenWidth } = UseGetWindowsWidth();
  useEffect(() => {
    if (screenWidth > 958) {
      dispatch(setNotificationModalClose());
      dispatch(HamburgerMenuClose());
      dispatch(setProfileModalClose());
      dispatch(setMiniSearchModalClose());
    }
  }, [screenWidth, dispatch]);

  const { data } = useQuery({ queryFn: fetchData, queryKey: ["test-data"] });

  return (
    <div
      className={`flex min-h-screen max-w-[100vw] bg-[#f5f7fa] ${
        Direction === "rtl" && "rtl"
      } ${Direction === "ltr" && "ltr"} fontIR box-border`}
    >
      <div
        className={`flex w-auto z-10 fixed top-0 h-[100dvh]  ${
          Direction === "rtl" && "translate-x-full"
        }  ${
          Direction === "ltr" && "-translate-x-full"
        } lg:translate-x-0 transition-all duration-300`}
      >
        {/* sidebar not home */}

        <SideBarNotHome />

        {/* options of sidebarmenus(not home) */}

        {/* side bar on home menu */}
        <HomeSidebar />
        {/* side bar on home menu */}
      </div>
      {/* default content */}
      <div className="flex-1 flex flex-col box-border ">
        {/* header */}
        <Header />
        {/* header */}
        {/* app container */}
        <div className="max-w-[100%] relative bg-[#f5f7fa] w-[100%] h-fit opacity-[99%]">
          <div className="w-[100%] h-[1000px] border bg-gray-300"></div>
        </div>
        {/* app container */}
      </div>
      <DrawerDefault />
      <DropDown />

      {/* <MiniSideBar /> */}

      <ProfileModal />
      <MiniNotification />
      <MiniSearchBar />
      <SearchBig />
    </div>
  );
}

export default App;
