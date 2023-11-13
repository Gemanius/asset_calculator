import { toast } from "react-toastify";

export const LoginRegisterValidations = (username?: string, password?: string) => {
  if (!username || !password) {
    toast.error("please insert your username and password completely");
    return false;
  }
  if (username.length < 5) {
    toast.error("your username should be more than 5 Charecters");
    return false;
  }
  if (password.length < 8) {
    toast.error("your password should be more than 8 Charecters");
    return false;
  }
  return true;
};
