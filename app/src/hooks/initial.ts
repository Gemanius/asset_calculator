import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { TAssetsAction } from "../store/actions/userAssets";
import { useEffect } from "react";

/// should dynamic it using seperate function for fetch api, and using config for url
/// should handle errors

const initialAssetState = async (dispatch: Dispatch<TAssetsAction>) => {};

export const useInitial = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    initialAssetState(dispatch);
  }, []);
};
