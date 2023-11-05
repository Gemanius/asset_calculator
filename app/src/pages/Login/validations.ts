export const LoginRegisterValidations = (username?: string, password?: string) => {
  if (!username || !password) return "please insert your username and password completely";
  if (username.length < 5) return "your username should be more than 5 Charecters";
  if (password.length < 8) return "your password should be more than 8 Charecters";
  return true;
};
