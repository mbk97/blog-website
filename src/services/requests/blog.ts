import { ICreate } from "../../components/interfaces/blog";
import { createBlogPost, getBlogPost } from "../api";
import { axiosInstance } from "../axiosConfig";

export const getUserBlogRequest = () => {
  return axiosInstance.get(getBlogPost);
};

export const createUserBlogRequest = (body: ICreate) => {
  return axiosInstance.post(createBlogPost, body);
};
