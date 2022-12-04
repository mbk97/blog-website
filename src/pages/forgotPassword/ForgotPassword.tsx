import React, { useState } from "react";
import { ForgotLogo, ForgotLogoText, ForgotWrapper } from "./style";
import {
  AuthInputWrapper,
  AuthLink,
  AuthRightContent,
  AuthWrapper,
  ButtonWrapper,
  InputContainer,
  LinkText,
  WelcomeHeader,
  WelcomeText,
} from "../../GlobalStyle";
import CustomInput from "../../components/common/input/Input";
import CustomButton from "../../components/common/button/Button";
import { useAppDispatch } from "../../components/redux/store";
import { forgotPasswordAction } from "../../components/redux/actions/auth";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import Spinner from "../../components/spinner/Spinner";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { email } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(forgotPasswordAction({ data, onSuccess, onError }));
    setLoading(true);
  };

  const onSuccess = (data: string) => {
    setLoading(false);
    dispatch(openSnackBar("success", data));
  };

  const onError = (error: string) => {
    setLoading(false);
    dispatch(openSnackBar("error", error));
  };

  return (
    <AuthWrapper>
      <>
        <ForgotLogo>
          <ForgotLogoText>Forgot Password</ForgotLogoText>
        </ForgotLogo>
        <AuthRightContent>
          <ForgotWrapper>
            <AuthInputWrapper>
              <WelcomeHeader>Forgot password?</WelcomeHeader>
              <WelcomeText>Enter your mail to reset your password</WelcomeText>
              <InputContainer>
                <CustomInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your mail"
                  onChange={handleChange}
                />
              </InputContainer>
            </AuthInputWrapper>
            <ButtonWrapper>
              <CustomButton onClick={handleSubmit}>
                {loading ? <Spinner /> : "Submit"}
              </CustomButton>
              <LinkText>
                <AuthLink to="/">Go Back to login</AuthLink>
              </LinkText>
            </ButtonWrapper>
          </ForgotWrapper>
        </AuthRightContent>
      </>
    </AuthWrapper>
  );
};

export default ForgotPassword;
