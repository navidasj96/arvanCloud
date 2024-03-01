import React from "react";
import { useUiRedux } from "../utils/getUiState";

export default function DropDown() {
  const { HamburgerMenuIsOpen } = useUiRedux();
  return (
    <div
      className={` fixed box-border    pointer-events-auto inset-0  opacity-0 w-[100vw]  ${
        HamburgerMenuIsOpen && "opacity-[1] "
      } transition-all bg-gray-500`}
    ></div>
  );
}
