import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackBar } from "../redux/actions/snackbarActions";
import { HiOutlineBell } from "react-icons/hi";
import { SnackContainer, SnackText } from "./style";
import { IconContext } from "react-icons";

const Snackbar = () => {
  const dispatch = useDispatch();

  const SHOW = useSelector((state: any) => state.snackBarState.toggleSnack);
  const MESSAGE = useSelector((state: any) => state.snackBarState.message);

  const MESSAGE_TEXT: any = useSelector(
    (state: any) => state.snackBarState.messageType
  );

  let TIMER = setTimeout(() => {
    dispatch(closeSnackBar());
  }, 3000);
  const handleTimeout = useCallback(() => {
    setTimeout(() => {
      dispatch(closeSnackBar());
    }, 3000);
  }, [dispatch]);

  useEffect(() => {
    if (SHOW) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [SHOW, TIMER, handleTimeout]);

  return (
    SHOW && (
      <SnackContainer bgColor={MESSAGE === "error" ? "#FF5E5B" : "#6EEB83"}>
        <div>
          {MESSAGE === "error" && <SnackText>FAILED</SnackText>}
          {MESSAGE === "success" && <SnackText>SUCCESS</SnackText>}
          <SnackText>{MESSAGE_TEXT}</SnackText>
        </div>
        <div>
          <IconContext.Provider
            value={{ className: "global-class-name", size: "50px" }}
          >
            <div>
              <HiOutlineBell />
            </div>
          </IconContext.Provider>
        </div>
      </SnackContainer>
    )
  );
};

export default Snackbar;
