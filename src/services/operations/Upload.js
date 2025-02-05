import { FileUploadEndpoints } from "services/apis"
import { apiConnector } from "services/apiConnector";
const { UploadFile_API } = FileUploadEndpoints

export const UploadFileAWS = async (key, type) => {
    try {
        const data = {
            fileName: key,
            fileType: type
        }
        const response = await apiConnector("POST", UploadFile_API, data);
        // console.log(response)
        return response;
    } catch (error) {
        console.log(error, 'error in uploading file');
    }
};

