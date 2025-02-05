"use client";


// LOCAL CUSTOM COMPONENT
import CategoryEditForm from "./category-edit-form";
import PageWrapper from "../../page-wrapper";
export default function EditCategoryPageView() {
  return <PageWrapper title="Edit Category">
      <CategoryEditForm />
    </PageWrapper>;
}