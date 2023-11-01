import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getFromLocalStorage } from "../utils/storage";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = (request: AxiosRequestConfig) => {
  const token = getFromLocalStorage("access_token");
  if (request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError) => {
  const statusCode = error.response?.status;
  if (statusCode === 401) {
    localStorage.clear();
    window.location.href = "/";
  }
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export { axiosInstance };
