import { forgotpasswordUrl } from "../api";
import { axiosInstance } from "../axiosConfig";

const forgotPasswordRequest = (data: string) => {
  return axiosInstance.post(forgotpasswordUrl, data);
};

export { forgotPasswordRequest };
