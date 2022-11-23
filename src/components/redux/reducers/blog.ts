import { blogTypes } from "../actionTypes/blog";
import { getBlogState } from "../../interfaces/blog";

const initialState: getBlogState = {
  blogs: [],
  createBlog: {
    title: "",
    description: "",
  },
};

export const blogReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case blogTypes.GET_USER_BLOG:
      return {
        ...state,
        blogs: payload,
      };

    case blogTypes.CREATE_USER_BLOG:
      return {
        ...state,
        creatBlog: {
          ...state.createBlog,
          ...payload,
        },
      };

    default:
      return state;
  }
};
