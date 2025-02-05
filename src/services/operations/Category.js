import { toast } from "react-hot-toast"
import { CategoryEndpoints } from "services/apis"
import { apiConnector } from "services/apiConnector";
const { CreateCategory_API, GetCategoryById_API, EditCategory_API,GetCategoryByPagination_API,GetAllCategory_API,SearchCategory_API } = CategoryEndpoints

export const Addcategory = async (data,router) => {
    const toastId = toast.loading("Adding category...");
    try {
        const response = await apiConnector("POST", CreateCategory_API, data);
        toast.success("category added successfully");
        router.push('/admin/categories')
    } catch (error) {
        console.log(error, 'error in add category');
    }
    toast.dismiss(toastId);
};

export const GetCategoryByID = async (id) => {
    // const toastId = toast.loading("Loading Category...");
    try {
        const response = await apiConnector("GET", `${GetCategoryById_API}?id=${id}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Categories")
        }
        return response?.data?.category
    } catch (error) {
        console.log(error, 'error in add category');
    }
    // toast.dismiss(toastId);
};

export const GetCategoryByPagination = async (number) => {
    // const toastId = toast.loading("Loading Category...");
    try {
        const response = await apiConnector("GET", `${GetCategoryByPagination_API}?page=${number}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Categories")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting categories');
    }
    // toast.dismiss(toastId);
};



export const EditCategory = async (data,router) => {
    const toastId = toast.loading("Editing Category...");
    try {
        const response = await apiConnector("PUT", EditCategory_API, data);
        toast.success("Category Edited successfully");
        router.push('/admin/categories')
    } catch (error) {

    }
    toast.dismiss(toastId);
};


export const GetAllCategory = async () => {
    // const toastId = toast.loading("Loading Category...");
    try {
        const response = await apiConnector("GET", `${GetAllCategory_API}?limit=999`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Categories")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting categories');
    }
    // toast.dismiss(toastId);
};

export const SearchCategory = async (query) => {
    // const toastId = toast.loading("Loading Category...");
    try {
        const response = await apiConnector("GET", `${SearchCategory_API}?q=${query}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Categories")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting categories');
    }
    // toast.dismiss(toastId);
};