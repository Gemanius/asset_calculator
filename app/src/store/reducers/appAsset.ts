import { EReduxUserAssetsActions } from "../../enum/redux-actions";
import { TAssetsAction } from "../actions/appAsset";
import { TAppAsset } from "../../types/asset.type";

const initialState: TAppAsset[] = [];

const setAssets = (preState: TAppAsset[], payload: TAppAsset[]) => {
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

export const assetsReducer = (state: TAppAsset[] = initialState, action: TAssetsAction) => {
  switch (action.type) {
    case EReduxUserAssetsActions.UPDATE:
      return [
        ...state.map((preStateData) => {
          if (preStateData.name != action.payload.name) return preStateData;
          return {
            ...preStateData,
            ...action.payload,
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
