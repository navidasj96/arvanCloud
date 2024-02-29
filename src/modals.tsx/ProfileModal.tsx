import React from "react";
import { useDispatch } from "react-redux";
import { useUiRedux } from "../utils/getUiState";
import { setProfileModalClose } from "../UistateManagment/UiSlice";
import IconComponent from "../components/IconComponent";

export default function ProfileModal() {
  const { ProfileModalIsOpen } = useUiRedux();
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        ProfileModalIsOpen && "max-h-full"
      } fixed top-0  w-full lg:hidden z-50 max-h-screen  `}
    >
      <div
        className={`${ProfileModalIsOpen && "translate-y-0"} ${
          !ProfileModalIsOpen && "translate-y-full"
        }  w-full h-screen rounded-t-lg transition-transform ease-in-out duration-500 bg-white  top-0 absolute `}
      >
        <div className="flex flex-col">
          <button
            className="mt-5 mr-5 text-[20px] rtl"
            onClick={() => dispatch(setProfileModalClose())}
          >
            <IconComponent iconName="Close" />
          </button>
          <div className="flex flex-col space-y-3 mt-10">
            <div className=" w-[90%] h-[100px] mx-auto bg-gray-500 border rounded-lg"></div>
            <div className=" w-[90%] h-[80px] mx-auto bg-gray-500 border rounded-lg"></div>

            <div className=" w-[90%] h-[80px] mx-auto bg-gray-500 border rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
