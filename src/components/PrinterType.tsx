import React, { useEffect, useState } from "react";
import { GetPrinters } from "../utils/upload-images";
import BasicSelect from "./DropDownMenu";
import {
  fetchCreateItemDropDowns,
  useSubmitAddItem,
} from "../utils/create-item-fetchers";
import { useUiRedux } from "../utils/getUiState";
import PrinterDropDown from "../PrinterDropDown";

export default function PrinterType() {
  const [printerType, setPrinterType] = useState();
  const { serviceTypesItem, addItemState } = useUiRedux();
  const bodyReq = useSubmitAddItem();
  // console.log("bodyreq frm hook", bodyReq);

  // console.log("addItemState", addItemState);

  useEffect(() => {
    const getPrinterType = async () => {
      const { data } = await GetPrinters();
      // const { data: serviceType };
      // console.log("printer types", data);
      if (data.result === 0) {
        setPrinterType(data.content.items);
      }
    };
    getPrinterType();
  }, []);

  // console.log("printerType ", printerType);

  return (
    <div className="w-full px-5">
      {serviceTypesItem.map(
        (item: { id: number; name: string; serviceType: number }) => {
          return (
            <div
              className={`flex flex-row- w-full py-10  gap-4`}
              key={item.id}
            >
              <div className=" w-[10%] flex">
                <div className="flex item-center my-auto mx-auto">
                  {item.name}
                </div>
              </div>
              <div className="flex w-[90%] h-[50px] px-5 ">
                {printerType && (
                  <div className="">
                    <PrinterDropDown
                      title="Printer Type"
                      item={printerType}
                      serviceType={item.serviceType}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
