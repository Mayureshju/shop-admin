import { toast } from "react-hot-toast"
import { ProductEndpoints } from "services/apis"
import { apiConnector } from "services/apiConnector";
const { CreateProduct_API, GetProductByPagination_API, DeleteProduct_API,GetProductById_API,EditProduct_API,GETAllProduct_API,SearchProduct_API } = ProductEndpoints

export const AddProduct = async (data, router) => {
    const toastId = toast.loading("Adding Product...");
    try {
        const response = await apiConnector("POST", CreateProduct_API, data);
        if (!response?.data?.success) {
            throw new Error("Could Not Add Product")
        }
        toast.success("Product added successfully");
        router.push('/admin/products')
    } catch (error) {
        console.log(error, 'error in add product');
    }
    toast.dismiss(toastId);
};

export const EditProduct = async (data, router) => {
    const toastId = toast.loading("Editing Product...");
    try {
        const response = await apiConnector("PUT", EditProduct_API, data);
        if (!response?.data?.success) {
            throw new Error("Could Not Edit Product")
        }
        toast.success("Product Edited successfully");
        router.push('/admin/products')
    } catch (error) {
        console.log(error, 'error in editing product');
    }
    toast.dismiss(toastId);
};
export const GetProductByID = async (id) => {
    // const toastId = toast.loading("Loading Category...");
    try {
        const response = await apiConnector("GET", `${GetProductById_API}?id=${id}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch product details")
        }
        return response?.data?.product
    } catch (error) {
        console.log(error, 'error in getting product');
    }
    // toast.dismiss(toastId);
};

export const GetAllProduct = async () => {
    try {
        const response = await apiConnector("GET",GETAllProduct_API );
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Products")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting Products');
    }
};


export const SearchProduct = async (query) => {
    try {
        const response = await apiConnector("GET",`${SearchProduct_API}?query=${query}` );
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Products")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting Products');
    }
};

export const GetProductByPagination = async (number) => {
    // const toastId = toast.loading("Loading Category...");
    try {
        const response = await apiConnector("GET", `${GetProductByPagination_API}?page=${number}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Products")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting Products');
    }
    // toast.dismiss(toastId);
};

export const DeleteProduct = async (data) => {
    const toastId = toast.loading("Deleting Product...");
    try {
        const response = await apiConnector("DELETE", `${DeleteProduct_API}?id=${data}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Delete Product")
        }
        toast.success("Product Deleted successfully");
    } catch (error) {
        console.log(error, 'error in Delete product');
    }
    toast.dismiss(toastId);
};