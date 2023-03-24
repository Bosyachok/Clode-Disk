import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import useReducer from "./useReducer";
import fileReducer from "./fileReducer";
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  user: useReducer,
  files: fileReducer,
  upload: uploadReducer,
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
