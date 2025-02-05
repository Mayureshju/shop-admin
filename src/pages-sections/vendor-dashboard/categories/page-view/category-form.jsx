"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Addcategory } from "services/operations/Category";
import { useRouter } from "next/navigation";
// MUI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

// GLOBAL CUSTOM COMPONENTS
import { FormProvider, TextField } from "components/form-hook";

// FORM VALIDATION SCHEMA
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string(),
  seoTitle: yup.string(),
  seoDescription: yup.string(),
  canonicalUrl: yup.string().url("Enter a valid URL"),
});

// ================================================================

export default function CategoryForm() {
  const router = useRouter()
  const initialValues = {
    name: "",
    description: "",
    seoTitle: "",
    seoDescription: "",
    canonicalUrl: "",
  };

  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = methods;

  const handleSubmitForm = handleSubmit(async (values) => {
    try {
      await Addcategory(values,router);
      reset(); 
    } catch (error) {
      console.error("Error submitting category:", error);
    }
  });

  return (
    <Card className="p-3">
      <FormProvider methods={methods} onSubmit={handleSubmitForm}>
        <Grid container spacing={3}>
          {/* Name Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField fullWidth name="name" label="Category Name" color="info" size="medium" placeholder="Enter category name" />
          </Grid>

          {/* Description Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField fullWidth name="description" label="Description" color="info" size="medium" placeholder="Enter description" multiline rows={3} />
          </Grid>

          {/* SEO Title Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField fullWidth name="seoTitle" label="SEO Title" color="info" size="medium" placeholder="Enter SEO title" />
          </Grid>

          {/* SEO Description Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField fullWidth name="seoDescription" label="SEO Description" color="info" size="medium" placeholder="Enter SEO description" multiline rows={3} />
          </Grid>

          {/* Canonical URL Field */}
          <Grid size={{ sm: 6, xs: 12 }}>
            <TextField fullWidth name="canonicalUrl" label="Canonical URL" color="info" size="medium" placeholder="Enter canonical URL" />
          </Grid>

          {/* Submit Button */}
          <Grid size={12}>
            <LoadingButton loading={isSubmitting} variant="contained" color="info" type="submit">
              Save Category
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
}
