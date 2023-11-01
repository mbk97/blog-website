import { blogsQueryKeys } from "../queryKeys/queryKeys";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createUserBlogRequest,
  deleteUserBlogPost,
  editUserBlogPost,
} from "../requests/blog";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../components/redux/store";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import { getErrorMessage } from "../../utils/response-helper";
import { axiosInstance } from "../axiosConfig";
import { blogPost } from "../api";
import { ICreate } from "../../components/interfaces/blog";
import { useState } from "react";

const useGetUserBlogQuery = () => {
  const fetchUserBlogs = async () => {
    try {
      const response = await axiosInstance.get(
        `${process.env.REACT_APP_BASE_URL}/api/blog`,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading } = useQuery(
    [blogsQueryKeys.getUserBlogs],
    fetchUserBlogs,
  );

  const result = data?.data?.blogs;
  return { result, isLoading };
};

const useReadSingleBlogQuery = (id: string) => {
  const { data, isLoading } = useQuery(
    [blogsQueryKeys.readSingleBlog, id],
    () => axiosInstance.get(`${blogPost}/${id}`),
  );
  return { data, isLoading };
};

const useCreateUserBlog = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const createBlog = async (payload: ICreate) => {
    try {
      const response = await createUserBlogRequest(payload);
      dispatch(openSnackBar("success", response?.data.message));
      queryClient.invalidateQueries([blogsQueryKeys.getUserBlogs]);
      navigate("/dashboard/latest");
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
    }
  };
  const { mutate, isLoading } = useMutation(createBlog);
  return { mutate, isLoading };
};

const useDeleteUserBlog = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const deleteBlog = async (payload: string) => {
    try {
      const response = await deleteUserBlogPost(payload);
      dispatch(openSnackBar("success", response?.data.message));
      queryClient.invalidateQueries([blogsQueryKeys.getUserBlogs]);
      navigate("/dashboard/latest");
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
    }
  };
  const { mutate, isLoading } = useMutation(deleteBlog);
  return { mutate, isLoading };
};

const useEditUserBlog = () => {
  const [edited, setEdited] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const editBlog = async (payload: any) => {
    try {
      const response = await editUserBlogPost(payload);
      if (response.status === 200) {
        dispatch(openSnackBar("success", response?.data.message));
        queryClient.invalidateQueries([blogsQueryKeys.getUserBlogs]);
        setEdited(true);
        window.location.reload();
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
    }
  };
  const { mutate, isLoading } = useMutation(editBlog);
  return { mutate, isLoading, edited };
};

export {
  useGetUserBlogQuery,
  useCreateUserBlog,
  useDeleteUserBlog,
  useReadSingleBlogQuery,
  useEditUserBlog,
};
