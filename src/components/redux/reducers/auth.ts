import { authTypes } from "../actionTypes/auth";
import { AuthState } from "../../interfaces/auth";

const intialState: AuthState = {
  iSAuthenticated: false,
  access_token: "",
  error: "",
  userAuthData: {
    name: "",
    email: "",
  },
};

export const authReducer = (state = intialState, { type, payload }: any) => {
  switch (type) {
    case authTypes.UPDATE_IS_AUTH:
      return {
        ...state,
        iSAuthenticated: payload,
      };
    case authTypes.UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        access_token: payload,
      };
    case authTypes.SET_USER_DATA:
      return {
        ...state,
        userAuthData: {
          ...state.userAuthData,
          ...payload,
        },
      };
    default:
      return state;
  }
};
