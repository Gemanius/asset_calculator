import { EReduxAuthActions } from "../../enum/redux-actions";
import { TAuthInfo } from "../../types/authInfo";

const setUser = (data: TAuthInfo) => {
  return <const>{
    type: EReduxAuthActions.SET,
    payload: data,
  };
};

const delUser = ({}) => {
  return <const>{
    type: EReduxAuthActions.REMOVE,
  };
};

export type TAuthActions = ReturnType<typeof setUser> | ReturnType<typeof delUser>;
