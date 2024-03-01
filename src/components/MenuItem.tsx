import React, { useState } from "react";
import IconComponent from "./IconComponent";

interface Props {
  item: {
    main: {
      title: string;
    };
    subMenu?: {
      title: string;
    }[];
  };
}
export default function MenuItem({ item }: Props) {
  const [clicked, setClicked] = useState(false);
  const subMenuCount = item.subMenu ? item.subMenu.length : 0;
  return (
    <li className="box-border flex flex-col ">
      <div
        onClick={() => setClicked((prev) => !prev)}
        className=" box-border relative  p-[.5rem] flex items-center gap-1 text-[4c4c4c] 
  rounded-lg cursor-pointer fontIR hover:bg-[#00a7a71a] "
      >
        {item.subMenu && item.subMenu.length > 0 && (
          <div
            className={`box-border rounded-full bg-[#00a7a71a] h-[16px]
     w-[16px] flex items-center justify-center ${
       clicked && "-rotate-90"
     } transition-all`}
          >
            <IconComponent iconName="ArrowLeft" />
          </div>
        )}
        <div className="box-border text-[16px] font-[500] leading-[16px] tracking-[-.24px]">
          {item.main.title}
        </div>
      </div>
      <div
        className={`block overflow-hidden  transition-[height] `}
        style={{ height: clicked ? 32 * subMenuCount : 0 }}
      >
        {item.subMenu && item.subMenu.length > 0 && (
          <>
            {item.subMenu.map((option, index) => {
              return (
                <div
                  key={index}
                  className=" box-border relative  p-[.5rem] flex items-center gap-1 text-[4c4c4c] 
        rounded-lg cursor-pointer fontIR hover:bg-[#00a7a71a] "
                >
                  <div className="box-border text-[16px] font-[500] leading-[16px] tracking-[-.24px] pr-8">
                    {option.title}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </li>
  );
}
