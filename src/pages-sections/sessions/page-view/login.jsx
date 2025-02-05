"use client";

import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// GLOBAL CUSTOM COMPONENTS
import { TextField, FormProvider } from "components/form-hook";

// LOCAL CUSTOM COMPONENTS
import Label from "../components/label";
import EyeToggleButton from "../components/eye-toggle-button";

// LOCAL CUSTOM HOOK
import usePasswordVisible from "../use-password-visible";
export default function LoginPageView() {
  const {
    visiblePassword,
    togglePasswordVisible
  } = usePasswordVisible();

  
// LOGIN FORM FIELDS INITIAL VALUES
  const initialValues = {
    email: "",
    password: ""
  };

  
// LOGIN FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().email("Invalid Email Address").required("Email is required")
  });
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });
  const {
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = methods;

  
// FORM SUBMIT HANDLER
  const handleSubmitForm = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
  });
  return <FormProvider methods={methods} onSubmit={handleSubmitForm}>
      <div className="mb-1">
        <Label>Email or Phone Number</Label>
        <TextField fullWidth name="email" size="small" type="email" placeholder="exmple@mail.com" />
      </div>

      <div className="mb-2">
        <Label>Password</Label>
        <TextField fullWidth size="small" name="password" autoComplete="on" placeholder="*********" type={visiblePassword ? "text" : "password"} slotProps={{
        input: {
          endAdornment: <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
        }
      }} />
      </div>

      <LoadingButton fullWidth size="large" type="submit" color="primary" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>;
}