import { ICreate } from "../../components/interfaces/blog";
import { blogPost } from "../api";
import { axiosInstance } from "../axiosConfig";

export const getUserBlogRequest = () => {
  return axiosInstance.get(blogPost);
};

export const getSinglePost = ({ id }: any) => {
  return axiosInstance.get(`${blogPost}/${id}`);
};

export const createUserBlogRequest = (body: ICreate) => {
  return axiosInstance.post(blogPost, body);
};

export const deleteUserBlogPost = (id: string) => {
  return axiosInstance.delete(`${blogPost}/${id}`);
};

export const editUserBlogPost = ({ _id, data }: any) => {
  return axiosInstance.put(`${blogPost}/${_id}`, data);
};
