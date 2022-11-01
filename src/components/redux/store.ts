import { rootReducer } from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
