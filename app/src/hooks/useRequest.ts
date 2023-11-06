import { useCallback, useState } from "react";
import { BaseRequestInterface } from "../apis/baseRequest.interface";
import { useDispatch } from "react-redux";
import { EReduxAuthActions } from "../enum/redux-actions";
import { TServerResponse } from "../types/serverResponse.type";

type TResponse<T> = <T>(request: BaseRequestInterface) => Promise<TServerResponse<T> | void>;
type TResult = [boolean, TResponse<any>];

export const useRequest = (): TResult => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return [
    isLoading,
    useCallback(async <T>(api: BaseRequestInterface): Promise<TServerResponse<T> | void> => {
      setIsLoading(true);
      try {
        const response = await fetch(api.url, api.requestInit);
        if (response.status > 199 && response.status < 300) return response.json();
        else if (response.status == 401) dispatch({ type: EReduxAuthActions.DELETE_USER });
        else console.log(response.json());
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    }, []),
  ];
};
