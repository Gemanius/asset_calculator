import { useDispatch } from "react-redux";
import {
  TDeleteFetchArguments,
  TGetFetchArguments,
  TPatchFetchArguments,
  TPostFetchArguments,
  TPutFetchArguments,
} from "../types/fetchArguments";
import { TServerResponse } from "../types/serverResponse.type";
import { EReduxAuthActions } from "../enum/redux-actions";
import { BaseFetchClass } from "../services/baseClass";
import { useRef } from "react";

type TMethodArg<T> =
  | TGetFetchArguments
  | TPatchFetchArguments<T>
  | TDeleteFetchArguments<T>
  | TPostFetchArguments<T>
  | TPutFetchArguments<T>;
type TMethod<D> = (arg: TMethodArg<D>) => Promise<Response>;
type TResponse<D, R> = (methodArg: TMethodArg<D>) => Promise<TServerResponse<R> | void>;

export const useRequest = <D, R>(method: TMethod<D>, methodClass: BaseFetchClass): TResponse<D, R> => {
  ///active loading

  const dispatch = useDispatch();
  const requestID = useRef();
  return async (methodArg: TMethodArg<D>) => {
    const response = await method.call(methodClass, methodArg);
    if (response.status > 199 && response.status < 300) {
      /// deactive loading
      return response.json();
    }
    if (response.status == 401) {
      // deactive loading
      console.log("its here");
      dispatch({ type: EReduxAuthActions.DELETE_USER });
    } else {
      //// should show error
    }
  };
};
