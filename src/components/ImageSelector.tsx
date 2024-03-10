"use client";
import React, { ChangeEventHandler } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import ImageInput from "./ImageInput";
import SelectedImageThumb from "./SelectedImageThumb";

interface Props {
  id: string;
  images?: string[];
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onRemove?(index: number): void;
}

export default function ImageSelector({
  id,
  images,
  onChange,
  onRemove,
  multiple,
}: Props) {
  const icon = multiple ? (
    <div className="relative">
      <MdOutlineAddPhotoAlternate className="w-8 h-8 bg-white" />
      <MdOutlineAddPhotoAlternate className="w-8 h-8 absolute -top-2 -right-2 -z-10" />
    </div>
  ) : (
    <MdOutlineAddPhotoAlternate className="w-8 h-8" />
  );

  return (
    <div className="flex  items-center space-x-5  px-5">
      <ImageInput
        id={id}
        onChange={onChange}
        multiple={multiple}
      >
        {icon}
      </ImageInput>
      {images?.map((img, index) => {
        return (
          <div
            key={index}
            className="relative px-2"
          >
            <SelectedImageThumb src={img} />
            {multiple ? (
              <div
                onClick={() => onRemove && onRemove(index)}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white rounded cursor-pointer"
              >
                <FaRegTrashCan className="w-4 h-4" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
