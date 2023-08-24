import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { openSnackBar } from "../../components/redux/actions/snackbarActions";
import { useAppDispatch } from "../../components/redux/store";
import { getErrorMessage } from "../../utils/response-helper";
import { saveToLocalStorage } from "../../utils/storage";
import { loginRequest, registerUserRequest } from "../requests/auth";

const useLoginUserMutation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(loginRequest, {
    onSuccess(data) {
      dispatch(openSnackBar("success", data.data.message));
      saveToLocalStorage("user_data", data.data.user);
      saveToLocalStorage("access_token", data.data.user.token);
      navigate("/dashboard/latest");
    },
    onError: (error: any) => {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
      console.log(errorMessage);
    },
  });

  return { mutate, isLoading };
};

const useRegisterUserMutation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(registerUserRequest, {
    onSuccess(data) {
      console.log(data, "Data here");
      dispatch(openSnackBar("success", data.data.message));
      saveToLocalStorage("user_data", data.data.user);
      saveToLocalStorage("access_token", data.data.user.access_token);
      navigate("/dashboard/latest");
    },
    onError: (error: any) => {
      const errorMessage = getErrorMessage(error);
      dispatch(openSnackBar("error", errorMessage));
    },
  });

  return { mutate, isLoading };
};

export { useLoginUserMutation, useRegisterUserMutation };
