import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import session from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "./root-reducer";

const middleWares = [thunk];

const persistConfig = {
  key: "root",
  storage: session,
};

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const middleware = applyMiddleware(...middleWares);

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  persistedReducer,
  composeEnchancers(middleware)
);

export const persistor = persistStore(store);
