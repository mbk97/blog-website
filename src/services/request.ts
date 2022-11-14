import { ILoginData, IRegisterSubmitData } from "../components/interfaces/auth";
import { loginUserUrl, registerUserUrl } from "./api";
import { axiosInstance } from "./axiosConfig";

const registerUserRequest = (data: IRegisterSubmitData) => {
  return axiosInstance.post(registerUserUrl, data);
};

const loginRequest = (data: ILoginData) => {
  return axiosInstance.post(loginUserUrl, data);
};

export { registerUserRequest, loginRequest };
