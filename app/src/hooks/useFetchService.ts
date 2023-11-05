import { useDispatch } from "react-redux";
import { BaseFetchClass } from "../services/baseClass";
import {
  TDeleteFetchArguments,
  TGetFetchArguments,
  TPatchFetchArguments,
  TPostFetchArguments,
  TPutFetchArguments,
} from "../types/fetchArguments";
import { TServerResponse } from "../types/serverResponse.type";
import { EReduxAuthActions } from "../enum/redux-actions";

type TData<T> =
  | TGetFetchArguments
  | TPatchFetchArguments<T>
  | TDeleteFetchArguments<T>
  | TPostFetchArguments<T>
  | TPutFetchArguments<T>;
type BaseFetchMethod<T> = (arg: TData<T>) => Promise<Response>;
type TResponse<K> = TServerResponse<K> | undefined;

export const useFetchService = async <T, K>(method: BaseFetchMethod<T>, data: TData<T>): Promise<TResponse<K>> => {
  const dispatch = useDispatch();
  /// should active loading
  const response = await method.call(this, data);
  /// should deactive loading
  if (response.status > 200 && response.status < 300) return <TServerResponse<K>>response.json();
  if (response.status == 401) {
    dispatch({ type: EReduxAuthActions.DELETE_USER });
    return;
  }
  /// should handle toast
};
