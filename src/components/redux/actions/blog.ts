import { action } from "typesafe-actions";
import {
  createUserBlogRequest,
  getUserBlogRequest,
} from "../../../services/requests/blog";
import { getErrorMessage } from "../../../utils/response-helper";
import { blogTypes } from "../actionTypes/blog";

export const getBlogAction = () => {
  return async (dispatch: any) => {
    try {
      const res = await getUserBlogRequest();
      console.log(res.data.blogs);
      dispatch(action(blogTypes.GET_USER_BLOG, res.data.blogs));
    } catch (error) {
      getErrorMessage(error);
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
