import { EReduxUserAssetsActions } from "../../enum/redux-actions";
import { TAppAsset } from "../../types/asset.type";

export const updateUserAssets = ({ name, amount, price }: TAppAsset) =>
  <const>{
    type: EReduxUserAssetsActions.UPDATE_USER_ASSET,
    payload: {
      name,
      amount,
      price,
    },
  };
export const initialUserAssets = (data: TAppAsset[]) =>
  <const>{
    type: EReduxUserAssetsActions.INITIAL_RESOURCE_ASSETS,
    payload: [...data],
  };

export const updateResourceAssetes = ([{ name, price }]: TAppAsset[]) =>
  <const>{
    type: EReduxUserAssetsActions.UPDATE_RESOURCE_ASSETS,
    payload: {
      name,
      price,
    },
  };

export type TAssetsAction =
  | ReturnType<typeof updateUserAssets>
  | ReturnType<typeof initialUserAssets>
  | ReturnType<typeof updateResourceAssetes>;
