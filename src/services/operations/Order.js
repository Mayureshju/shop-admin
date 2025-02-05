import { toast } from "react-hot-toast"
import { OrderEndpoints } from "services/apis"
import { apiConnector } from "services/apiConnector";
const { GetOrderByPagination_API, CreateOrder_API, SearchOrder_API, GetOrderById_API } = OrderEndpoints


export const GetOrderById = async (id) => {
    try {
        const response = await apiConnector("GET", `${GetOrderById_API}?id=${id}`);
        if (!response?.data?.success) {
            throw new Error("Could Not create order")
        }
        return response?.data;
    } catch (error) {
        console.log(error, 'error in create order');
    }
};

export const SearchOrder = async (query) => {
    try {
        const response = await apiConnector("GET", `${SearchOrder_API}?query=${query}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch orders")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting orders');
    }
};

export const GetOrderByPagination = async (number) => {
    // const toastId = toast.loading("Loading Category...");
    try {
        const response = await apiConnector("GET", `${GetOrderByPagination_API}?page=${number}`);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch orders")
        }
        return response?.data
    } catch (error) {
        console.log(error, 'error in getting orders');
    }
    // toast.dismiss(toastId);
};

export const Addorder = async (data,router) => {
    const toastId = toast.loading("Creating Order...");
    try {
        const response = await apiConnector("POST", CreateOrder_API, data);
        if (!response?.data?.success) {
            throw new Error("Could Not create order")
        }
        toast.success("Order Created successfully");
        router.push('/admin/orders')
    } catch (error) {
        console.log(error, 'error in create order');
    }
    toast.dismiss(toastId);
};



