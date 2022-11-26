import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getFromLocalStorage } from "../utils/storage";
// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "http://localhost:8000/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
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
  const statusCode = error.response!.status;
  if (statusCode === 401) {
    localStorage.clear();
    window.location.href = "/";
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export { axiosInstance };
