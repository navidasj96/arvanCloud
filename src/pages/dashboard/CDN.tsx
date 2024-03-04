import React, { useEffect, useState } from "react";
import { fetchCreateItemDropDowns } from "../../utils/create-item-fetchers";
import DropdownMenu from "../../components/DropDownMenu";

export default function CDN() {
  const [dropdowns, setDropdowns] = useState([{}]);
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
    <div className="w-full flex h-[800px]   ">
      <div className="mx-auto my-auto">
        <button
          className="border bg-red-200 cursor-pointer"
          onClick={() => alert("clickeds")}
        >
          click me
        </button>
      </div>
    </div>
  );
}
