import { toast } from "react-hot-toast"
import { ReportEndpoints } from "services/apis"
import { apiConnector } from "services/apiConnector";
const { GetReport_API, GetYearGraph_API } = ReportEndpoints

export const GetYearlyGrapghReport = async () => {
    try {
        const year = new Date().getFullYear();

            const response = await apiConnector("GET", `${GetYearGraph_API}?action=yearlyMetrics&year=${year}`);
            if (!response?.data?.success) {
                throw new Error("Could Not fetch Expense")
            }
            return response?.data
        
    } catch (error) {
        console.log(error, 'error in fetch expense');
    }
};

export const GetBestSellingReport = async () => {
    try {
        
            const response = await apiConnector("GET", `${GetReport_API}?action=bestSelling`);
            if (!response?.data?.success) {
                throw new Error("Could Not fetch Expense")
            }
            return response?.data
        
    } catch (error) {
        console.log(error, 'error in fetch expense');
    }
};

export const GetMonthlyReport = async (month, year) => {
    try {
        
            const response = await apiConnector("GET", `${GetReport_API}?action=metrics&period=monthly&month=${month}&year=${year}`);
            if (!response?.data?.success) {
                throw new Error("Could Not fetch Expense")
            }
            return response?.data
        
    } catch (error) {
        console.log(error, 'error in fetch expense');
    }
};

export const GetquaterlyReport = async (quaterly, year) => {
    try {
        if (quaterly && year) {
            const response = await apiConnector("GET", `${GetReport_API}?action=metrics&period=quarterly&quarter=${quaterly}&year=${year}`);
            if (!response?.data?.success) {
                throw new Error("Could Not fetch Expense")
            }
            return response?.data
        }
    } catch (error) {
        console.log(error, 'error in fetch expense');
    }
};

export const GetYearlyReport = async (year) => {
    try {
        if (year) {
            const response = await apiConnector("GET", `${GetReport_API}?action=metrics&period=yearly&year=${year}`);
            if (!response?.data?.success) {
                throw new Error("Could Not fetch Expense")
            }
            return response?.data
        }
    } catch (error) {
        console.log(error, 'error in fetch expense');
    }
};