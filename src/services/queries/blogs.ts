import { blogsQueryKeys } from "../queryKeys/queryKeys";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createUserBlogRequest,
  deleteUserBlogPost,
  editUserBlogPost,
  getUserBlogRequest,
} from "../requests/blog";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../components/redux/store";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import { getErrorMessage } from "../../utils/response-helper";
import { axiosInstance } from "../axiosConfig";
import { blogPost } from "../api";

const useGetUserBlogQuery = () => {
  const { data, isLoading } = useQuery(
    [blogsQueryKeys.getUserBlogs],
    getUserBlogRequest
  );

  const result = data?.data?.blogs;

  return { result, isLoading };
};

const useReadSingleBlogQuery = (id: string) => {
  const { data, isLoading } = useQuery(
    [blogsQueryKeys.readSingleBlog, id],
    () => axiosInstance.get(`${blogPost}/${id}`)
  );
  return { data, isLoading };
};

const useCreateUserBlog = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(createUserBlogRequest, {
    onSuccess: (data: any) => {
      dispatch(openSnackBar("success", data?.data.message));
      //   this updates the get blogs data
      queryClient.invalidateQueries([blogsQueryKeys.getUserBlogs]);
      navigate("/dashboard/latest");
    },
    onError: (error: any) => {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
      console.log(errorMessage);
    },
  });

  return { mutate, isLoading };
};

const useDeleteUserBlog = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { mutate, isLoading } = useMutation(deleteUserBlogPost, {
    onSuccess: (data: any) => {
      console.log(data, "delete result here");
      dispatch(openSnackBar("success", data?.data.message));

      //   this updates the get blogs data
      queryClient.invalidateQueries([blogsQueryKeys.getUserBlogs]);
      navigate("/dashboard/latest");
    },
    onError: (error: any) => {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
      console.log(errorMessage);
    },
  });

  return { mutate, isLoading };
};

const useEditUserBlog = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { mutate, isLoading } = useMutation(editUserBlogPost, {
    onSuccess: (data: any) => {
      console.log(data, "Edited result here");
      dispatch(openSnackBar("success", data?.data.message));
      //   this updates the get blogs data
      queryClient.invalidateQueries([blogsQueryKeys.getUserBlogs]);
      navigate("/dashboard/latest");
    },
    onError: (error: any) => {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
      console.log(errorMessage);
    },
  });

  return { mutate, isLoading };
};

export {
  useGetUserBlogQuery,
  useCreateUserBlog,
  useDeleteUserBlog,
  useReadSingleBlogQuery,
  useEditUserBlog,
};
