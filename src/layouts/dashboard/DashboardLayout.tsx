import React, { useEffect, useRef, useState } from "react";
import { useTranslate } from "../../locales/useLocales";
import {
  HamburgerMenuClose,
  setInitialTheme,
  setLang,
  setMiniSearchModalClose,
  setNotificationModalClose,
  setProfileModalClose,
} from "../../UistateManagment/UiSlice";
import { useDispatch } from "react-redux";
import { UseGetWindowsWidth, useUiRedux } from "../../utils/getUiState";
import SideBarNotHome from "../../components/SideBarNotHome";
import HomeSidebar from "../../components/HomeSidebar";
import Header from "../../components/Header";
import { DrawerDefault } from "../../components/HalfScreenHamburger";
import DropDown from "../../components/DropDown";
import ProfileModal from "../../modals.tsx/ProfileModal";
import MiniNotification from "../../components/MiniNotification";
import { MiniSearchBar } from "../../components/MiniSearchbar";
import { SearchBig } from "../../components/SearchBig";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  const { i18n } = useTranslate();
  const sidebarRef = useRef();
  useEffect(() => {
    const theme = window.localStorage.getItem("setting") as any;
    if (theme) {
      const res = JSON.parse(theme);
      dispatch(setInitialTheme(res.Direction));
      if (res.lang) {
        dispatch(setLang(res.lang));
        i18n.changeLanguage(res.lang);
      }
    }

    // if (theme) dispatch(setInitialTheme(theme.Direction));
  }, []);
  const dispatch = useDispatch();
  const { Direction, ActiveSession } = useUiRedux();
  const { screenWidth } = UseGetWindowsWidth();
  const [containerWidth, setContainerWidth] = useState<number>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screenWidth > 958) {
      dispatch(setNotificationModalClose());
      dispatch(HamburgerMenuClose());
      dispatch(setProfileModalClose());
      dispatch(setMiniSearchModalClose());
    }
  }, [screenWidth, dispatch]);
  useEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current?.clientWidth;
      setContainerWidth(((screenWidth - divWidth) / screenWidth) * 100);
    }

    if (screenWidth < 960) {
      setContainerWidth(100);
    }
    // console.log("divRef.current?.clientWidth", divRef.current?.clientWidth);

    // console.log("containerWidth", containerWidth);
  }, [screenWidth, divRef.current?.clientWidth, containerWidth, ActiveSession]);
  // const { data } = useQuery({ queryFn: fetchData, queryKey: ["test-data"] });
  // const ClickHandler = () => {
  //   setContainerWidth(divRef.current?.clientWidth);
  // };
  return (
    <div
      className={`flex min-h-screen max-w-[100vw] bg-[#f5f7fa] ${
        Direction === "rtl" && "rtl"
      } ${Direction === "ltr" && "ltr"} fontIR box-border`}
    >
      <div
        ref={divRef}
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
      <div
        className={` flex flex-col  box-border w-[100%]  ${
          Direction === "rtl" && "mr-auto"
        } ${Direction === "ltr" && "ml-auto"}`}
        style={{ width: `${containerWidth!}%` }}
      >
        {/* header */}
        <Header />
        {/* header */}
        {/* app container */}
        <div className="max-w-[100%] relative bg-[#f5f7fa] w-[100%] h-fit opacity-[99%]">
          {children}
        </div>
        {/* app container */}
      </div>
      <DrawerDefault />

      {/* <MiniSideBar /> */}

      <ProfileModal />
      <MiniNotification />
      <MiniSearchBar />
      <SearchBig />
    </div>
  );
}

export default DashboardLayout;
