import { EReduxCustomAssetActions } from "../../enum/redux-actions";
import { TCustomAsset } from "../../types/asset.type";

const set = (payload: TCustomAsset[]) =>
  <const>{
    type: EReduxCustomAssetActions.SET_ALL,
    payload,
  };

const add = (payload: TCustomAsset) =>
  <const>{
    type: EReduxCustomAssetActions.ADD,
    payload,
  };
const remove = (payload: number) =>
  <const>{
    type: EReduxCustomAssetActions.REMOVE,
    payload,
  };
const update = (payload: TCustomAsset) =>
  <const>{
    type: EReduxCustomAssetActions.UPDATE,
    payload,
  };
const deleteAll = () =>
  <const>{
    type: EReduxCustomAssetActions.DELETE_ALL,
  };

export type TCustomAssetActions =
  | ReturnType<typeof set>
  | ReturnType<typeof update>
  | ReturnType<typeof remove>
  | ReturnType<typeof add>
  | ReturnType<typeof deleteAll>;
