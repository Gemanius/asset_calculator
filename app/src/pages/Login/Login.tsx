import { FC, FormEvent, useRef, useState } from "react";
import { UnderLineP, Form } from "./style";
import { Input } from "./style";
import { Button } from "../../components/atoms/button/style";
import { userService } from "../../services";
import { TAuthBody } from "../../types/login";
import { LoginRegisterValidations } from "./validations";
import { useDispatch } from "react-redux";
import { EReduxAuthActions } from "../../enum/redux-actions";
import { TAuthInfo } from "../../types/authInfo";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";

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
  const authRequest = useRequest<TAuthBody, TAuthInfo>(userService.post, userService);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (usernameInput.current && passwordInput.current) {
      const username = usernameInput.current.value;
      const password = passwordInput.current.value;
      const isValidated = LoginRegisterValidations(username, password);
      if (isValidated == true) {
        const body: TAuthBody = { username, password };
        const bodyUrl = isLogin ? "login" : "create";
        const response = await authRequest({ url: bodyUrl, body });
        if (response) {
          const payload = response.data;
          dispatch({ type: EReduxAuthActions.SET_USER, payload });
          navigate("/profile");
        }
        // if (isLogin) response = await (await userService.post<TLogin>({ url: "login", body })).json();
        // else response = await (await userService.post<TLogin>({ url: "create", body })).json();
        // if (response?.data) {
        //   const data: TAuthInfo = response.data;
        //   dispatch({ type: EReduxAuthActions.SET_USER, payload: { ...data } });
        //   navigate("/profile");
        // }
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" ref={usernameInput} placeholder={"username"} />
      <Input type="password" ref={passwordInput} placeholder={"password"} />
      <Button type="submit">Submit</Button>
      <UnderLineP onClick={onClickParagraph}>
        {isLogin ? "Click to create new account" : "Click to Login on existing account"}
      </UnderLineP>
    </Form>
  );
};
