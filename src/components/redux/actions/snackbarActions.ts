import { snackBarTypes } from "../actionTypes/snackBarTypes";

export const openSnackBar = (message: string, messageType: string) => ({
  type: snackBarTypes.OPEN_SNACKBAR,
  message: message,
  messageType: messageType,
});

export const closeSnackBar = () => ({
  type: snackBarTypes.CLOSE_SNACKBAR,
});
