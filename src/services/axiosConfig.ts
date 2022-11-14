import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

export { axiosInstance };
