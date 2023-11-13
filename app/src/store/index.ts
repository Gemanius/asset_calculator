import { combineReducers, legacy_createStore as createStore } from "redux";
import { assetsReducer } from "./reducers/appAsset";
import { authReducer } from "./reducers/auth";
import { loadState, setState } from "../utils/localStorage";
import { customAssetReducer } from "./reducers/customAsset";

const presistedState = loadState();
const rootReducer = combineReducers({
  assets: assetsReducer,
  auth: authReducer,
  customAssets: customAssetReducer,
});

export const store = createStore(rootReducer, presistedState);
store.subscribe(() => {
  setState({
    assets: store.getState().assets,
    auth: store.getState().auth,
    customAssets: store.getState().customAssets,
  });
});
