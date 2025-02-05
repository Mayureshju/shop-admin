"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";

// MUI
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

// GLOBAL CUSTOM COMPONENTS
import { FormProvider, TextField, Autocomplete, Checkbox } from "components/form-hook";

// DUMMY CUSTOM DATA
import countryList from "data/countryList";

// STYLED COMPONENT
import { ButtonWrapper, CardRoot, FormWrapper } from "./styles";


// uncomment these fields below for from validation
const validationSchema = yup.object().shape({
  shipping_name: yup.string().required("Name is required"),
  shipping_email: yup.string().email("invalid email").required("Email is required"),
  shipping_contact: yup.string().required("Phone is required"),
  shipping_zip: yup.string().required("Zip is required"),
  shipping_country: yup.mixed().required("Country is required"),
  shipping_address1: yup.string().required("Address is required"),
  same_as_shipping: yup.boolean()
  
// billing_name: yup.string().required("required"),
  
// billing_email: yup.string().required("required"),
  
// billing_contact: yup.string().required("required"),
  
// billing_zip: yup.string().required("required"),
  
// billing_country: yup.object().required("required"),
  
// billing_address1: yup.string().required("required"),
});
export default function CheckoutForm() {
  const router = useRouter();
  const initialValues = {
    shipping_zip: "",
    shipping_name: "",
    shipping_email: "",
    shipping_contact: "",
    shipping_company: "",
    shipping_address1: "",
    shipping_address2: "",
    shipping_country: {
      label: "United States",
      value: "US"
    },
    same_as_shipping: false,
    billing_zip: "",
    billing_name: "",
    billing_email: "",
    billing_contact: "",
    billing_company: "",
    billing_address1: "",
    billing_address2: "",
    billing_country: {
      label: "United States",
      value: "US"
    }
  };
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });
  const {
    watch,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = methods;
  const handleSubmitForm = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
    router.push("/payment");
  });
  const sameAsShipping = watch("same_as_shipping");
  return <FormProvider methods={methods} onSubmit={handleSubmitForm}>
      {/* SHIPPING ADDRESS */}
      <CardRoot>
        <Typography variant="h6">Shipping Address</Typography>

        <FormWrapper>
          <TextField fullWidth label="Full Name" name="shipping_name" />
          <TextField fullWidth label="Phone Number" name="shipping_contact" />
          <TextField fullWidth type="email" label="Email Address" name="shipping_email" />
          <TextField fullWidth label="Company" name="shipping_company" />
          <TextField fullWidth label="Address 1" name="shipping_address1" />
          <TextField fullWidth label="Address 2" name="shipping_address2" />
          <Autocomplete fullWidth label="Country" name="shipping_country" placeholder="Select Country" options={countryList} getOptionLabel={option => typeof option === "string" ? option : option.label} />
          <TextField fullWidth label="Zip Code" name="shipping_zip" />
        </FormWrapper>
      </CardRoot>

      {/* BILLING ADDRESS */}
      <CardRoot>
        <Typography variant="h6">Billing Address</Typography>

        <Checkbox size="small" color="secondary" name="same_as_shipping" label="Same as shipping address" className={clsx({
        "mb-1": !sameAsShipping
      })} />

        {!sameAsShipping && <FormWrapper>
            <TextField fullWidth label="Full Name" name="billing_name" />
            <TextField fullWidth label="Phone Number" name="billing_contact" />
            <TextField fullWidth type="email" name="billing_email" label="Email Address" />
            <TextField fullWidth label="Company" name="billing_company" />
            <TextField fullWidth label="Address 1" name="billing_address1" />
            <TextField fullWidth label="Address 2" name="billing_address2" />
            <Autocomplete fullWidth label="Country" name="billing_country" placeholder="Select Country" options={countryList} getOptionLabel={option => typeof option === "string" ? option : option.label} />
            <TextField fullWidth label="Zip Code" name="billing_zip" />
          </FormWrapper>}
      </CardRoot>

      <ButtonWrapper>
        <Button fullWidth href="/cart" color="primary" variant="outlined" LinkComponent={Link}>
          Back to Cart
        </Button>

        <LoadingButton fullWidth type="submit" color="primary" variant="contained" loading={isSubmitting}>
          Proceed to Payment
        </LoadingButton>
      </ButtonWrapper>
    </FormProvider>;
}