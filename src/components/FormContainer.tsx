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
      className="ltr w-full"
    >
      <h3 className="text-center fontIR font-semibold pb-10 ">{title}</h3>
      {children}
    </form>
  );
}
