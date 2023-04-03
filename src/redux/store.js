import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default store;
