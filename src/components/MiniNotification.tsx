import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "@material-tailwind/react";
import { useUiRedux } from "../utils/getUiState";
import { setNotificationModalToggle } from "../UistateManagment/UiSlice";

export default function MiniNotification() {
  const dispatch = useDispatch();
  const { NotificationModalIsOpen } = useUiRedux();
  const open = NotificationModalIsOpen ? true : false;
  const handleOpen = () => dispatch(setNotificationModalToggle());
  return (
    <div className="fontIR">
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        className="w-[100px] h-[100px]"
      >
        <p className="fontIR mx-auto text-center my-auto">اعلانی وجود ندارد</p>
      </Dialog>
    </div>
  );
}
