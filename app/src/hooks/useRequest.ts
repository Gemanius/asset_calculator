import { useCallback, useState } from "react";
import { BaseRequestInterface } from "../apis/baseRequest.interface";
import { useDispatch } from "react-redux";
import { EReduxAuthActions } from "../enum/redux-actions";
import { TServerResponse } from "../types/serverResponse.type";
import { toast } from "react-toastify";

type TResponse = <T>(request: BaseRequestInterface) => Promise<TServerResponse<T> | undefined>;
type TResult = [string | null, TResponse];

export const useRequest = (): TResult => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<string | null>(null);
  return [
    isLoading,
    useCallback(async <T>(api: BaseRequestInterface): Promise<TServerResponse<T> | undefined> => {
      setIsLoading(api.constructor.name);
      try {
        const response = await fetch(api.url, api.requestInit);
        if (response.status > 199 && response.status < 300) return response.json();
        else if (response.status == 401) {
          dispatch({ type: EReduxAuthActions.REMOVE });
          return;
        } else {
          const responseData: TServerResponse<any> = await response.json();
          toast.error(responseData.message);
          return;
        }
      } catch (e) {
        toast.error("something went wrong...");
        return;
      } finally {
        setIsLoading(null);
      }
    }, []),
  ];
};
