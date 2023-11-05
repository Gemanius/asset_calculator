import { Navigate, Outlet } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";

export default (props: any) => {
  const authorization = useAuthorization();
  if (!authorization) {
    return <Navigate to={"login"} />;
  }
  return <Outlet />;
};
