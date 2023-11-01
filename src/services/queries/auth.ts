import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import { useAppDispatch } from "../../components/redux/store";
import { getErrorMessage } from "../../utils/response-helper";
import { saveToLocalStorage } from "../../utils/storage";

const useLoginUserMutation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRequest = async (payload: any) => {
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/user/login`,
        payload,
      );
      dispatch(openSnackBar("success", data.data.message));
      saveToLocalStorage("user_data", data.data.user);
      saveToLocalStorage("access_token", data.data.user.token);
      navigate("/dashboard/latest");
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
    }
  };

  const { mutate, isLoading } = useMutation(loginRequest);
  return { mutate, isLoading };
};

const useRegisterUserMutation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const registerUserRequest = async (payload: any) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/user/register`,
        payload,
      );
      dispatch(openSnackBar("success", response.data.message));
      saveToLocalStorage("user_data", response.data.user);
      saveToLocalStorage("access_token", response.data.user.access_token);
      navigate("/dashboard/latest");
    } catch (error) {}
  };
  const { mutate, isLoading } = useMutation(registerUserRequest);
  return { mutate, isLoading };
};

export { useLoginUserMutation, useRegisterUserMutation };
