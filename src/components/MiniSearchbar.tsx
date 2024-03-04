import React from "react";
import { Drawer, ThemeProvider } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useUiRedux } from "../utils/getUiState";
import {
  setMiniSearchModalClose,
  setMiniSearchModalOpen,
} from "../UistateManagment/UiSlice";

export function MiniSearchBar() {
  const dispatch = useDispatch();
  const { MiniSearchModalIsOpen } = useUiRedux();

  const openDrawer = () => dispatch(setMiniSearchModalOpen());
  const closeDrawer = () => dispatch(setMiniSearchModalClose());
  const theme = {
    drawer: {
      defaultProps: {
        size: 300,
        overlay: true,
        placement: "top",
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
          open={MiniSearchModalIsOpen ? true : false}
          onClose={closeDrawer}
          className="p-4"
          placement="top"
          placeholder={undefined}
        >
          <div className="w-[90%] mx-auto h-[100px] border bg-gray-300 rounded-lg"></div>

          <div className="w-[90%] mx-auto h-[100px] border bg-gray-300 rounded-lg"></div>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
