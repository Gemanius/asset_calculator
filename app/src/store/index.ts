import { combineReducers, legacy_createStore as createStore } from "redux";
import { userAssetsReducer } from "./reducers/userAssets";
import { authReducer } from "./reducers/auth";
import { loadState, setState } from "../localStorage";

const presistedState = loadState();
const rootReducer = combineReducers({
  assets: userAssetsReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, presistedState);
store.subscribe(() => {
  setState({
    assets: store.getState().assets,
    auth: store.getState().auth,
  });
});
