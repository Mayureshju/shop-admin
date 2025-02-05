import { toast } from "react-hot-toast"
import { ExpenseEndpoints } from "services/apis"
import { apiConnector } from "services/apiConnector";
const { CreateExpense_API, EditExpense_API, GetExpenseByPagination_API,GetExpenseById_API } = ExpenseEndpoints

export const AddExpense = async (data) => {
    const toastId = toast.loading("Adding Expense...");
    try {
        const response = await apiConnector("POST", CreateExpense_API, data);
        console.log(response)
        toast.success("Expense added successfully");
    } catch (error) {
        console.log(error, 'error in add Expense');
    }
    toast.dismiss(toastId);
};

export const EditExpense = async (slug,data) => {
    const toastId = toast.loading("Edit Expense...");
    try {
        const response = await apiConnector("PUT", `${EditExpense_API}?id=${slug}`, data);
        if (!response?.data?.success) {
            throw new Error("Could Not Edit Expense")
        }
        console.log(response)
        toast.success("Expense Edited successfully");
    } catch (error) {
        console.log(error, 'error in edit expense');
    }
    toast.dismiss(toastId);
};

export const GetExpenseByID = async (id) => {
    try {
        const response = await apiConnector("GET", `${GetExpenseById_API}?id=${id}`);
        if (!response?.data?.success) {
            throw new Error("Could Not fetch Expense")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in fetch expense');
    }
};

export const GetExpensePagination = async (page) => {
    try {
        const response = await apiConnector("GET", `${GetExpenseByPagination_API}?page=${page}`);
        if (!response?.data?.success) {
            throw new Error("Could Not fetch Expense")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in fetch expense');
    }
};