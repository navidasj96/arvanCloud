import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormContainer from "./FormContainer";
import { Input } from "@material-tailwind/react";
import { useUiRedux } from "../utils/getUiState";
import ItemPriceFormTemplate from "./itemPriceFormTemplate";
import ItemPriceFormTemplateDefault from "./ItemPriceFormTemplateDefault";
import ItemPriceFormTest from "./ItemPriceFormTest";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   itemCode: Yup.string().required("Item Code is required"),
//   // Add more validation for other fields as needed
// });

const ItemPricesForm = () => {
  const { serviceTypesItem } = useUiRedux();
  const [expand, setExpand] = useState(false);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col fontIR ltr text-center ">
        <div
          onClick={() => setExpand((prev) => !prev)}
          className="flex flex-row-reverse gap-1 ml-auto mr-5"
        >
          <label htmlFor="expand">پیشرفته</label>
          <input
            type="checkbox"
            checked={expand}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className={`flex flex-col gap-[10px] transition-all`}>
            {serviceTypesItem && serviceTypesItem.length > 0 && (
              <div className="w-full flex flex-col">
                <div className="flex flex-row-reverse items-center w-full py-10">
                  <div className=" w-[10%] flex">
                    <div className="flex item-center my-auto mx-auto">
                      : پیش فرض
                    </div>
                  </div>
                  <div className="flex w-[90%] h-[50px] px-5 ">
                    <ItemPriceFormTemplateDefault />
                    {/* <ItemPriceFormTest /> */}
                  </div>
                </div>

                {serviceTypesItem.map(
                  (item: { id: number; name: string; serviceType: number }) => {
                    return (
                      <div
                        className={`flex flex-row-reverse items-center w-full py-10 ${
                          !expand && "hidden"
                        }`}
                      >
                        <div className=" w-[10%] flex">
                          <div className="flex item-center my-auto mx-auto">
                            : {item.name}
                          </div>
                        </div>
                        <div className="flex w-[90%] h-[50px] px-5 ">
                          <ItemPriceFormTemplate item={item} />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <></>
    </div>
  );
};

export default ItemPricesForm;
