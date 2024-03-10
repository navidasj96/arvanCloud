import React, { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export default function ImageInput({ id, onChange, children, ...rest }: Props) {
  if (children) rest.hidden = true;
  else rest.hidden = false;

  return (
    <label htmlFor={id}>
      <input
        type="file"
        id={id}
        onChange={onChange}
        accept="image/*"
        {...rest}
      />
      <div className="w-10 h-10 rounded flex items-center justify-center  border-gray-700 cursor-pointer">
        {children}
      </div>
    </label>
  );
}
