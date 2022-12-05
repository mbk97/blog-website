import React, { useState } from "react";
import {
  AuthImg,
  AuthInputWrapper,
  AuthLeftContent,
  AuthLink,
  AuthRightContent,
  AuthWrapper,
  ButtonWrapper,
  ColoredText,
  InputContainer,
  LinkText,
  WelcomeHeader,
  WelcomeText,
} from "../../GlobalStyle";
import signupBg from "../../assets/images/sign_up.png";
import CustomInput from "../../components/common/input/Input";
import CustomButton from "../../components/common/button/Button";
import { registerAction } from "../../components/redux/actions/auth";
import { useAppDispatch } from "../../components/redux/store";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<string | any>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  console.log(data);
  const { email, name, password } = data;

  const disabled =
    !name || !email || !password || password.length < 5 || loading;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(registerAction({ data, onSuccess, onError }));
    setLoading(true);
    console.log("hello");
  };

  const onSuccess = (data: any) => {
    dispatch(openSnackBar("success", data));
    setLoading(false);
    navigate("/dashboard/latest");
  };

  const onError = (error: string) => {
    dispatch(openSnackBar("error", error));
    setLoading(false);
  };

  if (password.length < 5) {
    dispatch(openSnackBar("error", "password is too short"));
  }

  return (
    <div>
      <AuthWrapper>
        <AuthLeftContent>
          <AuthImg src={signupBg} />
        </AuthLeftContent>
        <AuthRightContent>
          <AuthInputWrapper>
            <WelcomeHeader>Welcome</WelcomeHeader>
            <WelcomeText>Let’s Sign you up quickly</WelcomeText>
            <InputContainer>
              <CustomInput
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </InputContainer>
            <InputContainer>
              <CustomInput
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </InputContainer>
            <InputContainer>
              <CustomInput
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </InputContainer>
            <ButtonWrapper>
              <CustomButton onClick={handleSubmit} disabled={disabled}>
                {loading ? <Spinner /> : "Submit"}
              </CustomButton>
              <LinkText>
                Already have an account?{" "}
                <ColoredText>
                  <AuthLink to="/">login</AuthLink>
                </ColoredText>{" "}
              </LinkText>
            </ButtonWrapper>
          </AuthInputWrapper>
        </AuthRightContent>
      </AuthWrapper>
    </div>
  );
};

export default Signup;
