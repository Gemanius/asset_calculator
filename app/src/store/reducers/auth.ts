import { EReduxAuthActions } from "../../enum/redux-actions";
import { TAuthInfo } from "../../types/authInfo";
import { TAuthActions } from "../actions/auth";

const initalState: TAuthInfo | null = null;

export const authReducer = (state: TAuthInfo | null = initalState, action: TAuthActions) => {
  switch (action.type) {
    case EReduxAuthActions.SET_USER:
      if (state)
        return {
          ...state,
          ...action.payload,
        };
      return action.payload;
    case EReduxAuthActions.DELETE_USER:
      return initalState;

    default:
      return state;
  }
};
