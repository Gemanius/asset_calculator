import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRequest } from "./useRequest";
import { TAppAsset } from "../types/asset.type";
import { GetAppAssetsApi } from "../apis";
import { EReduxUserAssetsActions } from "../enum/redux-actions";

/// should dynamic it using seperate function for fetch api, and using config for url
/// should handle errors

export const useInitial = () => {
  const [isLoading, request] = useRequest();
  const dispatch = useDispatch();
  const getAppAssets = async () => {
    const result = await request<TAppAsset[]>(new GetAppAssetsApi());
    if (result) {
      dispatch({ type: EReduxUserAssetsActions.SET, payload: result.data });
    }
  };
  useEffect(() => {
    getAppAssets();
  }, []);
};
