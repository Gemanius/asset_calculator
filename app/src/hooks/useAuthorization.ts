import { useSelector } from "react-redux";
import { TAuthInfo } from "../types/authInfo";

export const useAuthorization = () => {
  const auth: TAuthInfo = useSelector((state: any) => state.auth);
  return auth?.accessToken;
};
