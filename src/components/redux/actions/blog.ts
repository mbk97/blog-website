import { action } from "typesafe-actions";
import {
  createUserBlogRequest,
  deleteUserBlogPost,
  editUserBlogPost,
  getSinglePost,
  getUserBlogRequest,
} from "../../../services/requests/blog";
import { getErrorMessage } from "../../../utils/response-helper";
import { blogTypes } from "../actionTypes/blog";

export const getBlogAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch(action(blogTypes.GET_POST_LOADING, true));
      const res = await getUserBlogRequest();
      console.log(res.data.blogs);
      dispatch(action(blogTypes.GET_USER_BLOG, res.data.blogs));
      dispatch(action(blogTypes.GET_POST_LOADING, false));
    } catch (error) {
      getErrorMessage(error);
      dispatch(action(blogTypes.GET_POST_LOADING, false));
    }
  };
};

export const getSinglePostAction = ({ id, onSuccess, onError }: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(action(blogTypes.GET_SINGLE_POST_LOADING, true));
      const response = await getSinglePost(id);
      dispatch(action(blogTypes.GET_SINGLE_POST, response.data.singleData));
      console.log(response);
      dispatch(action(blogTypes.GET_SINGLE_POST_LOADING, false));
    } catch (error) {
      dispatch(action(blogTypes.GET_SINGLE_POST_LOADING, false));
      onError(getErrorMessage(error));
    }
  };
};

export const createBlogAction = ({ data, onSuccess, onError }: any) => {
  return async (dispatch: any) => {
    try {
      const res = await createUserBlogRequest(data);
      if (res) {
        dispatch(action(blogTypes.CREATE_USER_BLOG, res.data));
        onSuccess(res.data.message);
        dispatch(getBlogAction());
      }
    } catch (error) {
      onError(getErrorMessage(error));
    }
  };
};

export const editUserBlogAction = ({ _id, data, onSuccess, onError }: any) => {
  return async (dispatch: any) => {
    try {
      const response = await editUserBlogPost(_id, data);
      console.log(response, "Edit respone here");
      onSuccess(response.data.message);
      dispatch(getBlogAction());
    } catch (error) {
      console.log(error, "Edit Error here");
      onError(getErrorMessage(error));
    }
  };
};

export const deleteBlogAction = ({ id, onSuccess, onError }: any) => {
  return async (dispatch: any) => {
    try {
      const res = await deleteUserBlogPost(id);
      if (res) {
        onSuccess(res.data.message);
        dispatch(action(blogTypes.DELETE_USER_BLOG));
        dispatch(getBlogAction());
      }
    } catch (error) {
      onError(getErrorMessage(error));
    }
  };
};
