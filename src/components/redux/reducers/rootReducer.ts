import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { blogReducer } from "./blog";
import { snackBarReducer } from "./snackbar";

export const rootReducer = combineReducers({
  snackBarState: snackBarReducer,
  register: authReducer,
  blogs: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
