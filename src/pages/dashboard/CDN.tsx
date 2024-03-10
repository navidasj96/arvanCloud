import React, { useEffect, useState, useTransition } from "react";
import {
  addNewItem,
  fetchCreateItemDropDowns,
  fetchServiceType,
  useSubmitAddItem,
} from "../../utils/create-item-fetchers";
import DropdownMenu from "../../components/DropDownMenu";
import MultipleImageSelector from "../../components/MultipleImageSelector";
import WeekDaysCheckbox from "../../components/WeekDaysCheckbox";
import { useDispatch } from "react-redux";
import { setServiceTypes } from "../../UistateManagment/UiSlice";
import ItemPricesForm from "../../components/ItemPricesForm";
import SamplFormMUI from "../../components/SamplFormMUI";
import PrinterType from "../../components/PrinterType";
import { Tags } from "../../components/tags";
import SingleImageSelector from "../../components/SingleImageSelector";
import IntroForm from "../../components/IntroForm";
import { useUiRedux } from "../../utils/getUiState";
import PrepItemForm from "../../components/PrepItemForm";
const DropDownoptions = [
  "ItemStatus",
  "DisplayStatus",
  "MealType",
  "ShowLable",
  "Weekdays",
];

const TabNames = ["Part1", "Part2", "Part3", "Part4"];
export default function CDN() {
  const dropDownInit = {
    ItemStatus: [],
    DisplayStatus: [],
    ShowLable: [],
    Weekdays: [],
    FileTypes: [],
  };
  const [activePart, setActivePart] = useState("Part1");
  const [dropdowns, setDropdowns] = useState(dropDownInit);
  const bodyReq = useSubmitAddItem();
  const { addItemState } = useUiRedux();

  console.log("addItemState", addItemState);

  if (bodyReq) {
    console.log("body req", bodyReq.bodyReq);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async (option: string) => {
      const { data } = await fetchCreateItemDropDowns({
        option: option,
      });
      const {
        data: serviceType,
      }: { data: { result: number; content: { items: [] } } } =
        await fetchServiceType();

      // console.log("serviceType", serviceType);

      if (serviceType.result === 0) {
        dispatch(setServiceTypes(serviceType.content.items));
      }

      if (data.result === 0) {
        const optionArr = {};
        // @ts-ignore

        optionArr[option] = data.content;
        // @ts-ignore

        setDropdowns((prev) => ({ ...prev, ...optionArr }));
      }
    };
    DropDownoptions.forEach((item) => fetchData(item));
  }, []);
  // console.log("dropdown", dropdowns);
  const selectPartHandler = (part: string) => {
    setActivePart(part);
  };
  return (
    <div className="w-full flex flex-col h-full pt-5 ">
      <div className="  w-full flex flex-row gap-5 py-5 h-[100px] px-5">
        {TabNames.map((part, index) => {
          return (
            <div
              key={index}
              onClick={() => selectPartHandler(part)}
              className={`w-[50px] h-[50px] flex cursor-pointer items-center border rounded-lg ${
                activePart === part && "bg-blue-600"
              } ${activePart !== part && "bg-gray-300"}`}
            >
              <p className="mx-auto my-auto">{part}</p>
            </div>
          );
        })}

        <button className="flex h-auto w-auto border rounded-lg mr-auto bg-blue-300 hover:bg-blue-700">
          <p
            className="mx-auto my-auto fontIR "
            onClick={async () => bodyReq && (await addNewItem(bodyReq.bodyReq))}
          >
            Submit
          </p>
        </button>
      </div>

      <div className="w-[100%] flex flex-col h-screen bg-white">
        <div
          className={`flex flex-row gap-2 py-5 px-5 ${
            activePart !== "Part1" && "hidden"
          }`}
        >
          <div className="flex flex-col w-full">
            <div className=" flex flex-col w-[500px] py-5">
              <IntroForm />
            </div>
            <div className="w-full flex flex-col gap-4">
              {dropdowns.DisplayStatus.length > 0 &&
                Object.entries(dropdowns).map(([key, value]) => {
                  return (
                    <div className="w-full flex flex-col">
                      {key === "Weekdays" && value.length > 0 && (
                        <div className="flex flex-row w-full gap-4">
                          <div className="fontIR my-auto"> روزهای هفته:</div>
                          <WeekDaysCheckbox item={value} />
                        </div>
                      )}
                      {key !== "Weekdays" && value.length > 0 && (
                        <DropdownMenu
                          title={key}
                          item={value}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="flex  w-[500px]">
              <Tags />
            </div>
            <div className={`flex flex-col border-t py-5`}>
              <p className="fontIR">تصویر اصلی:</p>
              <SingleImageSelector />
            </div>
          </div>
        </div>

        <div className={`w-full flex ${activePart !== "Part2" && "hidden"}`}>
          <ItemPricesForm />
        </div>

        <div
          className={`w-full flex flex-col ${
            activePart !== "Part3" && "hidden"
          } px-5`}
        >
          <div className=" flex flex-col w-[500px] py-5">
            <PrepItemForm />
          </div>
          <MultipleImageSelector />
        </div>

        <div
          className={`flex flex-col w-full items-center ml-auto ${
            activePart !== "Part4" && "hidden"
          }`}
        >
          <PrinterType />
        </div>
      </div>
      {/* form containers */}
    </div>
  );
}
