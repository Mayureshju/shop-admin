
// CUSTOM DATA MODEL
import ExpenseForm from "../expense-form";
import PageWrapper from "../../page-wrapper";
export default function CreateExpensePageView() {
  return <PageWrapper title="Create New Expense">
      <ExpenseForm />
    </PageWrapper>;
}