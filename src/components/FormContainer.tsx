import React, { FormEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  title: string;
}

export default function FormContainer({ title, children, onSubmit }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-96 p-6 space-y-6 bg-white shadow-md rounded-md"
    >
      <h3 className="text-center fontIR font-semibold ">{title}</h3>
      {children}
    </form>
  );
}
