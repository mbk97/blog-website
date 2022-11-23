import { action } from "typesafe-actions";
import {
  loginRequest,
  registerUserRequest,
} from "../../../services/requests/auth";
import { saveToLocalStorage } from "../../../utils/storage";
import { getErrorMessage } from "../../../utils/response-helper";
import { authTypes } from "../actionTypes/auth";

const registerAction = ({ data, onSuccess, onError }: any) => {
  return async (dispatch: any) => {
    try {
      const res = await registerUserRequest(data);
      console.log(res.data.user, "HERE");
      if (res.status === 201) {
        onSuccess(res.data.message);
      }

      // if (res.status === 403) {
      // }

      const access_token = res.data.user.token;
      dispatch(action(authTypes.UPDATE_ACCESS_TOKEN, access_token));
      dispatch(action(authTypes.SET_USER_DATA, res.data.user));
      dispatch(action(authTypes.UPDATE_IS_AUTH, true));
      saveToLocalStorage("user_data", res.data.user);
      saveToLocalStorage("access_token", access_token);
    } catch (error: any) {
      onError(getErrorMessage(error));
    }
  };
};

const loginAction = ({ data, onSuccess, onError }: any) => {
  return async (dispatch: any) => {
    try {
      const res = await loginRequest(data);
      if (res.status === 200) {
        onSuccess(res);
      }

      const access_token = res.data.user.token;
      dispatch(action(authTypes.UPDATE_ACCESS_TOKEN, access_token));
      dispatch(action(authTypes.SET_USER_DATA, res.data.user));
      dispatch(action(authTypes.UPDATE_IS_AUTH, true));
      saveToLocalStorage("user_data", res.data.user);
      saveToLocalStorage("access_token", access_token);
    } catch (error) {
      onError(getErrorMessage(error));
    }
  };
};

export { registerAction, loginAction };
