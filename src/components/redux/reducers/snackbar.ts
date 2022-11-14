import { snackBarTypes } from "../actionTypes/snackBarTypes";
import { snackBarStateTypes } from "../../interfaces/snackbar";
import { AnyAction } from "redux";

const initialState: snackBarStateTypes = {
  toggleSnack: false,
  messageType: "",
  message: "",
};

export const snackBarReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case snackBarTypes.OPEN_SNACKBAR: {
      return {
        ...state,
        toggleSnack: true,
        messageType: action.messageType,
        message: action.message,
      };
    }
    case snackBarTypes.CLOSE_SNACKBAR: {
      return {
        ...state,
        toggleSnack: false,
        message: "",
        messageType: "",
      };
    }
    default:
      return state;
  }
};
