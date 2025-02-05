"use client";


// LOCAL CUSTOM COMPONENT
import OrderEditForm from "./order-edit-form";
import PageWrapper from "../../page-wrapper";
export default function EditCategoryPageView() {
  return <PageWrapper title="Edit Order">
      <OrderEditForm />
    </PageWrapper>;
}