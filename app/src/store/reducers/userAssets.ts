import { EReduxUserAssetsActions } from "../../enum/redux-actions";
import { TAssetsAction } from "../actions/userAssets";
import { TAppAsset, TUserAppAsset } from "../../types/asset.type";
import defaultAssets from "../../assets/crypto_currencies.json";

const initialState: TUserAppAsset[] = [];

const updateResourceAssets = (preState: TUserAppAsset[], payload: TAppAsset[] | TUserAppAsset[]) => {
  if (preState.length == 0) {
    return [...payload.map((elem) => ({ ...elem, amount: 0 }))];
  }
  return [
    ...preState.map((elem) => {
      const asset = payload.find((asset) => asset.id == elem.id);
      return {
        ...elem,
        ...asset,
      };
    }),
  ];
};

export const userAssetsReducer = (state: TUserAppAsset[] = initialState, action: TAssetsAction) => {
  switch (action.type) {
    case EReduxUserAssetsActions.UPDATE_USER_ASSET:
      return [
        ...state.map((preStateData) => {
          if (preStateData.name != action.payload.name) return preStateData;
          return {
            ...preStateData,
            ...action.payload,
          };
        }),
      ];
    case EReduxUserAssetsActions.UPDATE_RESOURCE_ASSETS:
      return updateResourceAssets(state, action.payload);

    default:
      return state;
  }
};
