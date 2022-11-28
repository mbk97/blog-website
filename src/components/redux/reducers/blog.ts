import { blogTypes } from "../actionTypes/blog";
import { getBlogState } from "../../interfaces/blog";

const initialState: getBlogState = {
  blogs: [],
  singleBlog: {},
  singleBlogLoading: false,
  getBlogLoading: false,
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

    case blogTypes.GET_POST_LOADING:
      return {
        ...state,
        getBlogLoading: payload,
      };
    case blogTypes.GET_SINGLE_POST_LOADING:
      return {
        ...state,
        singleBlogLoading: payload,
      };

    case blogTypes.GET_SINGLE_POST:
      return {
        ...state,
        singleBlog: payload,
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
