import React, { useState, useEffect } from "react";
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
import loginBg from "../../assets/images/login_bg.png";
import CustomInput from "../../components/common/input/Input";
import CustomButton from "../../components/common/button/Button";
import { loginAction } from "../../components/redux/actions/auth";
import { useAppDispatch } from "../../components/redux/store";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [data, setData] = useState<string | any>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const { email, password } = data;

  const disable = !email || !password || loading;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    setLoading(true);
    dispatch(loginAction({ data, onSuccess, onError }));
  };

  const onSuccess = (res: any) => {
    dispatch(openSnackBar("success", res.data.message));
    setLoading(false);
    navigate("/dashboard/latest");

    if (!res) {
      navigate("/signup");
    }
  };
  const onError = (error: string) => {
    dispatch(openSnackBar("error", error));
    console.log(error);
    setLoading(false);
  };

  useEffect(() => {
    if (password && password.length < 5) {
      dispatch(openSnackBar("error", "password is too short"));
    }
  }, [password, password.length, dispatch]);
  return (
    <AuthWrapper>
      <AuthLeftContent>
        <AuthImg src={loginBg} />
      </AuthLeftContent>
      <AuthRightContent>
        <AuthInputWrapper>
          <WelcomeHeader>Welcome</WelcomeHeader>
          <WelcomeText>Let’s log you in quickly</WelcomeText>

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
            <CustomButton onClick={handleClick} disabled={disable}>
              {loading ? <Spinner /> : "Submit"}
            </CustomButton>
            <div>
              <LinkText>
                Don’t have an account?{" "}
                <ColoredText>
                  <AuthLink to="/signup">sign-up</AuthLink>
                </ColoredText>{" "}
              </LinkText>
              <LinkText>
                <ColoredText>
                  <AuthLink to="/forgot-password"> Forgot password?</AuthLink>
                </ColoredText>
              </LinkText>
            </div>
          </ButtonWrapper>
        </AuthInputWrapper>
      </AuthRightContent>
    </AuthWrapper>
  );
};

export default Login;
