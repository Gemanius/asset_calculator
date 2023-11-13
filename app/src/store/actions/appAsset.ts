import { EReduxUserAssetsActions } from "../../enum/redux-actions";
import { TAppAsset } from "../../types/asset.type";

export const updateAsset = ({ name, amount, price }: TAppAsset) =>
  <const>{
    type: EReduxUserAssetsActions.UPDATE,
    payload: {
      name,
      amount,
      price,
    },
  };

export const updateAssetsPrice = (payload: TAppAsset[]) =>
  <const>{
    type: EReduxUserAssetsActions.UPDATE_PRICE,
    payload,
  };

export const setAssets = (payload: TAppAsset[]) =>
  <const>{
    type: EReduxUserAssetsActions.SET,
    payload,
  };

export type TAssetsAction =
  | ReturnType<typeof updateAsset>
  | ReturnType<typeof updateAssetsPrice>
  | ReturnType<typeof setAssets>;
