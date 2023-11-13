import { EReduxCustomAssetActions } from "../../enum/redux-actions";
import { TCustomAsset } from "../../types/asset.type";
import { TCustomAssetActions } from "../actions/customAsset";

const preState: TCustomAsset[] = [];

export const customAssetReducer = (state: TCustomAsset[] = preState, action: TCustomAssetActions) => {
  switch (action.type) {
    case EReduxCustomAssetActions.ADD:
      return [...state, action.payload];
    case EReduxCustomAssetActions.REMOVE:
      return [...state.filter((elem) => elem.id != action.payload)];
    case EReduxCustomAssetActions.SET_ALL:
      return [...action.payload];
    case EReduxCustomAssetActions.UPDATE:
      return [...state.filter((elem) => elem.id != action.payload.id), action.payload];
    default:
      return state;
  }
};
