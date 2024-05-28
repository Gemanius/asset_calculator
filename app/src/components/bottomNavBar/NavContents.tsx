import { useDispatch, useSelector } from "react-redux";
import { NavContainer, NavSections } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { EReduxAuthActions, EReduxCustomAssetActions } from "../../enum/redux-actions";

export const NavContents = () => {
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch({ type: EReduxAuthActions.REMOVE });
    dispatch({ type: EReduxCustomAssetActions.DELETE_ALL });
    return navigate("/home");
  };
  return (
    <NavContainer>
      {auth ? (
        <>
          {location.pathname == "/profile" ? (
            <>
              <NavSections to={"/home"} $needborder>
                Home
              </NavSections>
              <NavSections $needborder to={"/home"} onClick={onClickLogout}>
                Logout
              </NavSections>
            </>
          ) : (
            <>
              <NavSections to={"/profile"} $needborder>
                Profile
              </NavSections>
              <NavSections $needborder to={"/home/total"}>
                Total assets
              </NavSections>
            </>
          )}
        </>
      ) : (
        <>
          <NavSections to={"/profile"} $needborder>
            Login
          </NavSections>
          <NavSections $needborder to={"/home/total"}>
            Total assets
          </NavSections>
        </>
      )}
    </NavContainer>
  );
};
