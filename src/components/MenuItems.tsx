import React, { useState } from "react";
import IconComponent from "./IconComponent";
import MenuItem from "./MenuItem";

interface Props {
  options: {
    main: {
      title: string;
    };
    subMenu?: {
      title: string;
    }[];
  }[];
}

export default function Menu({ options }: Props) {
  return (
    <div className="box-border p-[0.5rem] flex flex-col gap-[.25rem] whitespace-nowrap">
      <div className="flex flex-col gap-[.25rem] box-border ">
        <ol className="p-[.5rem] box-border flex flex-col gap-[.25rem]">
          {options.map((option, index) => {
            return (
              <MenuItem
                item={option}
                key={index}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
