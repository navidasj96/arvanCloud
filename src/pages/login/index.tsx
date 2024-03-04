import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input } from "@material-tailwind/react";
import FormContainer from "../../components/FormContainer";
import { IoIosClose } from "react-icons/io";
import { filterFormikErrors } from "../../utils/formik-helper";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "../../routes/sections/hooks/use-router";
// @ts-ignore

const fetchData = async (email, password) => {
  const headers = new Headers();
  headers.append("accept", "*/*"); // Set the 'accept' header
  headers.append("Content-Type", "application/json"); // Set the
  const res = await fetch("http://100.124.5.231/api/Authentication/Signin", {
    method: "POST",
    body: JSON.stringify({ userName: email, password }),
    headers: headers,
  });
  const data = await res.json();
  return data;
};

const AddItemForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();
  const validationSchema = yup.object({
    Email: yup
      .string()

      .required("وارد کردن نام کاربری الزامیست"),
    Password: yup
      .string()

      .min(8, "رمز عبور حداقل ۸ کاراکتر باید باشد")

      .required("وارد کردن رمز عبور الزامیست"),
  });

  // const { mutate } = useMutation({
  //   queryFn: (username, password) => fetchData(username, password),
  // });
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        Email: "",
        Password: "",
      },
      validationSchema: validationSchema,

      onSubmit: async (values) => {
        const { Email, Password } = values;
        const loginRes = await fetchData(Email, Password);
        console.log("response for login is", loginRes);
        if (loginRes.result !== 0) {
          setErrorMessage(loginRes.message);
        }
        if (loginRes.content.token) {
          console.log("jwt token", loginRes.content);
          const auth = {
            jwt: loginRes.content.token,
            jwt_exp: loginRes.content.expireAt,
          };
          localStorage.setItem(
            "auth",
            JSON.stringify({
              auth,
            })
          );
          router.replace("/dashboard");
        }
      },
    });

  const { Email, Password } = values;
  const formErrors: string[] = filterFormikErrors(errors, touched, values);
  type valueKeys = keyof typeof values;

  const error = (name: valueKeys) => {
    return errors[name] && touched[name] ? true : false;
  };

  return (
    <div className="container w-screen h-screen flex mt-8">
      <div className="mx-auto my-auto">
        <FormContainer
          title="Login"
          onSubmit={handleSubmit}
        >
          <Input
            label="phone"
            type="text"
            id="Email"
            name="Email"
            value={Email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
            error={error("Email")}
          />
          <Input
            label="Password"
            type="Password"
            id="Password"
            name="Password"
            value={Password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            crossOrigin={undefined}
            error={error("Password")}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <div className="">
            {formErrors.map((err) => {
              return (
                <div
                  key={err}
                  className="space-x-1 flex items-center text-red-500"
                >
                  <IoIosClose className="w-4 h-4" />
                  <p className="text-xs fontIR">{err}</p>
                </div>
              );
            })}
          </div>
        </FormContainer>
      </div>
      {errorMessage && (
        <div className="fontIR fixed left-[50%] top-100 rtl">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default AddItemForm;
