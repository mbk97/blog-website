import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { snackBarReducer } from "./snackbar";

export const rootReducer = combineReducers({
  snackBarState: snackBarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
