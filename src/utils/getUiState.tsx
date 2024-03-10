import { useSelector } from "react-redux";
import { RootState } from "../UistateManagment/store";
import { RefObject, useEffect, useState } from "react";

export const useUiRedux = () => {
  const ActiveSession = useSelector<RootState, string>(
    (state) => state.uiRedux.ActiveSession
  );
  const HamburgerMenuIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.HamburgerMenuOpen
  );
  const ProfileModalIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.ProfileModalIsOpen
  );
  const NotificationModalIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.NotificationModalIsOpen
  );
  const ProfilePopOverIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.ProfilePopOver
  );
  const MiniSearchModalIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.MiniSearchModalIsOpen
  );
  const SearchBigModal = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.SearchBigModal
  );
  const ActiveSideMenu = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.ActiveSideMenu
  );
  const Direction = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.Direction
  );
  const selectedOption = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.selectedOption
  );
  const theme = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.theme
  );
  const lang = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.lang
  );
  const addItemState = useSelector<RootState, any>(
    (state) => state.uiRedux.addItemState
  );
  const serviceTypesItem = useSelector<RootState, any>(
    (state) => state.uiRedux.serviceTypesItem
  );
  return {
    ActiveSession,
    HamburgerMenuIsOpen,
    ProfileModalIsOpen,
    NotificationModalIsOpen,
    ProfilePopOverIsOpen,
    MiniSearchModalIsOpen,
    SearchBigModal,
    ActiveSideMenu,
    Direction,
    selectedOption,
    theme,
    lang,
    addItemState,
    serviceTypesItem,
  };
};

export function UseGetWindowsWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
  return {
    screenWidth,
  };
}
export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [screenWidth, setScreenWidth] = useState<number>();

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

  return { screenWidth };
}

// function useOutsideAlerter(ref: RefObject<HTMLElement>) {
//   const [clickedOutside, setClickedOutside] = useState(false);
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event: { target: any }) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         // alert("You clicked outside of me!");
//         console.log("clicked outside");

//         setClickedOutside(true);
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
//   return { clickedOutside };
// }

// export { useOutsideAlerter };
