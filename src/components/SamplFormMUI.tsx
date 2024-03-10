import React, { useMemo } from "react";
import FormProvider from "./hook-form/form-provider";
import * as Yup from "yup";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import RHFTextField from "./hook-form/rhf-text-field";
export default function SamplFormMUI() {
  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    phoneNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    company: Yup.string().required("Company is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    role: Yup.string().required("Role is required"),
    zipCode: Yup.string().required("Zip code is required"),
    avatarUrl: Yup.mixed<any>().nullable().required("Avatar is required"),
    // not required
    status: Yup.string(),
    isVerified: Yup.boolean(),
  });

  const defaultValues = useMemo(
    () => ({
      name: "john",
      city: "",
      role: "",
      email: "",
      state: "",
      status: "",
      address: "",
      country: "",
      zipCode: "",
      company: "",
      avatarUrl: Yup.mixed<any>().nullable().required("Avatar is required"),

      phoneNumber: "",
      isVerified: true,
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const values = watch();
  const onSubmit = handleSubmit(async (data) => {});

  return (
    <FormProvider
      methods={methods}
      onSubmit={onSubmit}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          xs={12}
          md={8}
          sx={{ width: 1000 }}
        >
          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "repeat(4, 1fr)",
            }}
          >
            <RHFTextField
              name="name"
              label="Full Name"
            />
            <RHFTextField
              name="email"
              label="Email Address"
            />
            <RHFTextField
              name="phoneNumber"
              label="Phone Number"
            />

            <RHFTextField
              name="state"
              label="State/Region"
            />
            <RHFTextField
              name="city"
              label="City"
            />
            <RHFTextField
              name="address"
              label="Address"
            />
            <RHFTextField
              name="zipCode"
              label="Zip/Code"
            />
            <RHFTextField
              name="company"
              label="Company"
            />
            <RHFTextField
              name="role"
              label="Role"
            />
          </Box>

          <Stack
            alignItems="flex-end"
            sx={{ mt: 3 }}
          >
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {"Create User"}
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
