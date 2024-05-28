import { EReduxUserAssetsActions } from "../../enum/redux-actions";
import { TAssetsAction } from "../actions/appAsset";
import { TAppAsset } from "../../types/asset.type";

const initialState: TAppAsset[] = [];

const setAssets = (preState: TAppAsset[], payload: TAppAsset[]) => {
  return [...payload.map((elem) => ({ ...elem, amount: 0 }))];
};

export const assetsReducer = (state: TAppAsset[] = initialState, action: TAssetsAction) => {
  switch (action.type) {
    case EReduxUserAssetsActions.UPDATE:
      return [
        ...state.map((preStateData) => {
          if (preStateData.id != action.payload.id) return preStateData;
          console.log(action.payload.id);
          return {
            ...preStateData,
            amount: action.payload.amount,
          };
        }),
      ];
    case EReduxUserAssetsActions.SET:
      return setAssets(state, action.payload);
    case EReduxUserAssetsActions.UPDATE_PRICE:
      return state;
    default:
      return state;
  }
};
