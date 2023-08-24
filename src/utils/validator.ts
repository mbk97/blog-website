export const passwordValidator = (password: string) => {
  if (password && password.length < 8) {
    return "Password is too short";
  }

  if (password && !/[A-Z]/.test(password)) {
    return "Password should contain at least one uppercase";
  }

  if (password && !/\d/.test(password)) {
    return "Password should contain at least one number";
  }

  if (password && !/[@$!%*?&]/.test(password)) {
    return "Password should contain at least one special character ";
  }

  return true;
};

export const checkPasswordValidator = (password: string) => {
  return passwordValidator(password) === true;
};
