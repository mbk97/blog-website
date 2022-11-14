export interface AuthState {
  iSAuthenticated: boolean;
  error: string;
  access_token: string;
  userAuthData: IUserAuthData;
}

export interface IUserAuthData {
  name: string;
  email: string;
}

export interface IRegisterSubmitData {
  name: string;
  email: string;
  password: string;
}

export type ILoginData = Pick<IRegisterSubmitData, "email" | "password">;
