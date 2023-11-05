import { EReduxUserAssetsActions } from "../../enum/redux-actions";
import { TAssetsAction } from "../actions/userAssets";
import { TAppAsset } from "../../types/asset.type";
import defaultAssets from "../../assets/crypto_currencies.json";

const initialState: TAppAsset[] = [];

const UserAssetsReducer = (state: TAppAsset[] = initialState, action: TAssetsAction) => {
  switch (action.type) {
    case EReduxUserAssetsActions.INITIAL_RESOURCE_ASSETS:
      return [...action.payload];
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
      return;

    default:
      return state;
  }
};

export default UserAssetsReducer;
