import { combineReducers, legacy_createStore as createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import MainRecucer from "./reducers/RootReduser.js";

const redusers = combineReducers({
  MainPage: MainRecucer,
});

const store = createStore(redusers, composeWithDevTools());

export default store;
