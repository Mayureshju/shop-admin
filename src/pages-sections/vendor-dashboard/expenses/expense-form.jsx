"use client";

import { useState } from "react";
import { useForm,useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AddExpense } from "services/operations/Expense";
// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

// GLOBAL CUSTOM COMPONENTS
import DropZone from "components/DropZone";
import FlexBox from "components/flex-box/flex-box";
import { Checkbox, FormProvider, TextField } from "components/form-hook";

// STYLED COMPONENTS
import { UploadImageBox, StyledClear } from "../styles";
import { Button, MenuItem } from "@mui/material";

// CUSTOM DATA MODEL


// FORM FIELDS VALIDATION SCHEMA
// const validationSchema = yup.object().shape({
//   name: yup.string().required("Name is required!")
// });


// ================================================================


// ================================================================

export default function ExpenseForm(props) {
  const initialValues = {

    month: "",
    year: "",
    quarter: "",
    expenses: []
  };


  const monthOptions = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" }
  ];

  const yearOptions = Array.from({ length: 2035 - 2025 + 1 }, (_, index) => {
    const year = 2025 + index;
    return { value: year, label: year.toString() };
  });

  const quarterOptions = [
    { value: 1, label: "First Quarter" },
    { value: 2, label: "Second Quarter" },
    { value: 3, label: "Third Quarter" },
    { value: 4, label: "Fourth Quarter" }
  ];

  const methods = useForm({
    defaultValues: initialValues,
    // resolver: yupResolver(validationSchema)
  });
  const {
    handleSubmit,
    control,
    formState: {
      isSubmitting
    }
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "expenses"
  });

  // FORM SUBMIT HANDLER
  const handleSubmitForm = handleSubmit(async(values) => {
   const response = await AddExpense(values);
  });
  return <Card className="p-3">
    <FormProvider methods={methods} onSubmit={handleSubmitForm}>
      <Grid container spacing={3}>
        <Grid size={{ sm: 6, xs: 12 }}>
          <TextField select name="month" label="Month" fullWidth>
            {monthOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ sm: 6, xs: 12 }}>
          <TextField select name="year" label="Year" fullWidth>
            {yearOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ sm: 6, xs: 12 }}>
          <TextField select name="quarter" label="Quarter" fullWidth>
            {quarterOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ sm: 6, xs: 12 }}>
          <Button variant="contained" color="info" type="button"               onClick={() => append({ name: "", amount: "" })}
          >
            Add Expenses List
          </Button>
        </Grid>

        <Grid size={12}>
            {fields.map((field, index) => (
              <Box
                key={field.id}
                display="flex"
                alignItems="center"
                gap={2}
                mb={2}
              >
                {/* Expense Name Field */}
                <TextField
                  name={`expenses[${index}].name`}
                  label="Expense Name"
                  fullWidth
                />

                {/* Expense Amount Field */}
                <TextField
                  name={`expenses[${index}].amount`}
                  label="Amount"
                  fullWidth
                  type="number"
                />

                {/* Remove Expense Button */}
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              </Box>
            ))}
          </Grid>
        <Grid size={12}>
          <LoadingButton loading={isSubmitting} variant="contained" color="info" type="submit">
            Save Expense
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  </Card>;
}