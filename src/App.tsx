import React, { useEffect, useState } from "react";
import "./App.css";
import SidebarOptions from "./components/Sidebar";
import SettingOptions from "./components/SettingOptions";
import Header from "./components/Header";
import { DrawerDefault } from "./components/HalfScreenHamburger";
import { FullScreenHamburger } from "./components/FullScreenHamburger";
import { useDispatch } from "react-redux";
import { HamburgerMenuClose } from "./UistateManagment/UiSlice";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  useEffect(() => {
    if (screenWidth > 800) {
      dispatch(HamburgerMenuClose());
    }
  }, [screenWidth, dispatch]);
  return (
    <div className="flex min-h-screen w-screen bg-[#f5f7fa] rtl fontIR">
      <div className="flex w-auto z-10 fixed top-0 h-[100dvh] translate-x-full lg:relative lg:translate-x-0 transition-all duration-300">
        {/* sidebar not home */}
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

        {/* options of sidebarmenus(not home) */}
      </div>
      {/* default content */}
      <div className="flex-1 flex flex-col ">
        {/* header */}
        <Header />
        {/* header */}
        {/* app container */}
        <div className="max-w-[100%] relative bg-[#f5f7fa] w-[100%] h-fit opacity-[99%]">
          <div className="w-[100%] h-[600px] border bg-gray-300"></div>
        </div>
        {/* app container */}
      </div>
      <DrawerDefault />
    </div>
  );
}

export default App;
