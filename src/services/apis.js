import { Create, Delete, Edit } from "@mui/icons-material";
import { GET } from "app/api/(category)/fetchallcategory/route";
import exp from "constants";
import Search from "icons/Search";

// export const BASE_URL = "http://localhost:3000/api";
export const BASE_URL = "https://www.poornahuti.com/api";
export const CategoryEndpoints = {
  CreateCategory_API : BASE_URL + "/createcategory",
  GetCategoryById_API : BASE_URL + "/getcategorybyid",
  EditCategory_API : BASE_URL + "/updatecategory",
  GetCategoryByPagination_API : BASE_URL + "/getcategorywithpagination",
  GetAllCategory_API : BASE_URL + "/fetchallcategory",
  SearchCategory_API : BASE_URL + "/searchcategory",
}

export const FileUploadEndpoints = {
  UploadFile_API : BASE_URL + "/imageupload",
}

export const ProductEndpoints = {
  CreateProduct_API : BASE_URL + "/createproduct",
  GetProductById_API : BASE_URL + "/getproductbyid",
  EditProduct_API : BASE_URL + "/updateproduct",
  GetProductByPagination_API : BASE_URL + "/getpaginationproduct",
  DeleteProduct_API : BASE_URL + "/deleteproduct",
  GETAllProduct_API : BASE_URL + "/getallproduct",
  SearchProduct_API : BASE_URL + "/searchproductadmin",
}

export const OrderEndpoints = {
  GetOrderByPagination_API : BASE_URL + "/getorderbypagination",
  CreateOrder_API : BASE_URL + "/createorder",
  SearchOrder_API : BASE_URL + "/searchorder",
  GetOrderById_API : BASE_URL + "/getorderbyid",
}

export const ExpenseEndpoints = {
  CreateExpense_API : BASE_URL + "/addexpense",
  EditExpense_API : BASE_URL + "/updateexpense",
  GetExpenseByPagination_API : BASE_URL + "/getexpense",
  GetExpenseById_API : BASE_URL + "/getexpensebyid",
}

export const ReportEndpoints = {
  GetReport_API : BASE_URL + "/filterreports",
  GetYearGraph_API : BASE_URL + "/yearlygrapgh",
  ReportDownload_API : BASE_URL + "/filterorderbydate"
}
