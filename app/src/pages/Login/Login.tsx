import { FC, FormEvent, useRef, useState } from "react";
import { UnderLineP, Form } from "./style";
import { Input } from "./style";
import { Button } from "../../components/atoms/button/style";
import { TAuthBody } from "../../types/login";
import { LoginRegisterValidations } from "../../utils/validations/login";
import { useDispatch } from "react-redux";
import { EReduxAuthActions } from "../../enum/redux-actions";
import { TAuthInfo } from "../../types/authInfo";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { LoginApi, RegisterApi, UserApiNames } from "../../apis";

export const Login: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const onClickParagraph = () => {
    setIsLogin((pre) => !pre);
    if (usernameInput?.current) usernameInput.current.value = "";
    if (passwordInput?.current) passwordInput.current.value = "";
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRequestLoading, request] = useRequest();
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (usernameInput.current && passwordInput.current) {
      const username = usernameInput.current.value;
      const password = passwordInput.current.value;
      const isValidated: boolean = LoginRegisterValidations(username, password);
      if (isValidated) {
        const body: TAuthBody = { username, password };
        const api = isLogin ? new LoginApi(body) : new RegisterApi(body);
        const response = await request<TAuthBody>(api);
        if (response) {
          const payload = response.data;
          dispatch({ type: EReduxAuthActions.SET, payload });
          navigate("/profile");
        }
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" ref={usernameInput} placeholder={"username"} />
      <Input type="password" ref={passwordInput} placeholder={"password"} />
      <Button type="submit">{isRequestLoading ? "Loading..." : "Submit"}</Button>
      <UnderLineP onClick={onClickParagraph}>
        {isRequestLoading == UserApiNames.REGISTER || isRequestLoading == UserApiNames.LOGIN
          ? "Loading..."
          : isLogin
          ? "Click to create new account"
          : "Click to Login on existing account"}
      </UnderLineP>
    </Form>
  );
};
