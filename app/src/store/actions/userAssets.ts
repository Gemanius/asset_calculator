import { EReduxUserAssetsActions } from "../../enum/redux-actions";
import { TAppAsset } from "../../types/asset.type";

export const updateUserAppAsset = ({ name, amount, price }: TAppAsset & { amount: number }) =>
  <const>{
    type: EReduxUserAssetsActions.UPDATE_USER_ASSET,
    payload: {
      name,
      amount,
      price,
    },
  };

export const updateResourceAssetes = (payload: TAppAsset[]) =>
  <const>{
    type: EReduxUserAssetsActions.UPDATE_RESOURCE_ASSETS,
    payload,
  };

export type TAssetsAction = ReturnType<typeof updateUserAppAsset> | ReturnType<typeof updateResourceAssetes>;
