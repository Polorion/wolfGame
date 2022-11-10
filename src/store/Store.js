import { combineReducers, legacy_createStore as createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import MainRecucer from "./reducers/RootReduser.js";
import playerReducer from "./reducers/WolfReducer";

const redusers = combineReducers({
  // MainPage: MainRecucer,
  player: playerReducer,
});

const store = createStore(redusers, composeWithDevTools());

export default store;
