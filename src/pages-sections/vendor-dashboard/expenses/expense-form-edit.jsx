"use client";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EditExpense, GetExpenseByID } from "services/operations/Expense";
import { useParams } from "next/navigation";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, MenuItem } from "@mui/material";

// GLOBAL CUSTOM COMPONENTS
import { FormProvider, TextField } from "components/form-hook";

// Validation Schema
const validationSchema = yup.object().shape({
  month: yup.number().required("Month is required"),
  year: yup.number().required("Year is required"),
  quarter: yup.number().required("Quarter is required"),
  expenses: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Expense name is required"),
      amount: yup.number().typeError("Amount must be a number").required("Amount is required")
    })
  )
});

export default function ExpenseFormEdit() {
  const { slug } = useParams(); // Get expense ID from URL
  const [loading, setLoading] = useState(true);

  const methods = useForm({
    defaultValues: {
      month: "",
      year: "",
      quarter: "",
      expenses: []
    },
    resolver: yupResolver(validationSchema)
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting }
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "expenses"
  });

  // Fetch expense data and populate form
  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const response = await GetExpenseByID(slug);
        if (response?.success) {
          const expenseData = response.data;

          // Reset form with the fetched data
          reset({
            month: expenseData.month,
            year: expenseData.year,
            quarter: expenseData.quarter,
            expenses: expenseData.expenses || []
          });
        }
      } catch (error) {
        console.error("Error fetching expense data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchExpenses();
    }
  }, [slug, reset]);

  // Form submission handler
  const handleSubmitForm = handleSubmit(async (values) => {
    console.log("Submitting Form Data:", values);
    await EditExpense(slug,values);
  });

  return (
    <Card className="p-3">
      <FormProvider methods={methods} onSubmit={handleSubmitForm}>
        <Grid container spacing={3}>
          {/* Month Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField select name="month" label="Month" fullWidth>
              {Array.from({ length: 12 }, (_, i) => ({
                value: i + 1,
                label: new Date(0, i).toLocaleString("default", { month: "long" })
              })).map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Year Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField select name="year" label="Year" fullWidth>
              {Array.from({ length: 2035 - 2025 + 1 }, (_, index) => {
                const year = 2025 + index;
                return { value: year, label: year.toString() };
              }).map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Quarter Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField select name="quarter" label="Quarter" fullWidth>
              {[1, 2, 3, 4].map((qtr) => (
                <MenuItem key={qtr} value={qtr}>
                  {`Quarter ${qtr}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Add Expense Button */}
          <Grid size={12}>
            <Button
              variant="contained"
              color="info"
              type="button"
              onClick={() => append({ name: "", amount: "" })}
            >
              Add Expense
            </Button>
          </Grid>

          {/* Expense Fields */}
          <Grid size={12}>
            {fields.map((field, index) => (
              <Box key={field.id} display="flex" alignItems="center" gap={2} mb={2}>
                {/* Expense Name */}
                <TextField
                  name={`expenses[${index}].name`}
                  label="Expense Name"
                  fullWidth
                />

                {/* Expense Amount */}
                <TextField
                  name={`expenses[${index}].amount`}
                  label="Amount"
                  fullWidth
                  type="number"
                />

                {/* Remove Button */}
                <Button variant="outlined" color="error" onClick={() => remove(index)}>
                  Remove
                </Button>
              </Box>
            ))}
          </Grid>

          {/* Submit Button */}
          <Grid size={12}>
            <LoadingButton loading={isSubmitting || loading} variant="contained" color="info" type="submit">
              {loading ? "Loading..." : "Save Expense"}
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
}
