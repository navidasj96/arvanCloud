import React, { useEffect, useState } from "react";
import { fetchCreateItemDropDowns } from "../../utils/create-item-fetchers";
import DropdownMenu from "../../components/DropDownMenu";
import MultipleImageSelector from "../../components/MultipleImageSelector";

export default function CDN() {
  const [dropdowns, setDropdowns] = useState([{}]);
  const item = [
    { value: 0, title: "غیرفال" },
    { value: 1, title: "فعال" },
    { value: 2, title: "نامشخص" },
  ];
  const Days = [
    { value: 0, title: "شنبه" },
    { value: 1, title: "یکشنبه" },
    { value: 2, title: "دوشنبه" },
    { value: 3, title: "سه شنبه" },
    { value: 4, title: "چهارشنبه" },
    { value: 5, title: "بینشجنه" },
    { value: 6, title: "جمعه" },
  ];
  // useEffect(() => {
  //   const options = [
  //     "ItemStatus",
  //     "DisplayStatus",
  //     "ShowLable",
  //     "Weekdays",
  //     "FileTypes",
  //   ];
  //   const fetchData = async (option: string) => {
  //     const { data } = await fetchCreateItemDropDowns({
  //       option: option,
  //     });
  //     if (data.result === 0) {
  //       const optionArr = {};
  //       // @ts-ignore

  //       optionArr[option] = data.content;
  //       setDropdowns((prev) => [...prev, optionArr]);
  //     }
  //   };
  //   options.forEach((item) => fetchData(item));
  // }, []);
  // console.log("dropdowns", dropdowns);

  return (
    <div className="w-full flex h-[800px]  ">
      <div className="mx-auto my-auto">
        <div className="flex flex-col sapce-y-3">
          <div className="w-[100px]">
            <DropdownMenu title="label" item={item} />
          </div>
          <div className="w-[100px]">
            <DropdownMenu title="DAYs" item={Days} />
          </div>
          <MultipleImageSelector />
        </div>
      </div>
    </div>
  );
}
