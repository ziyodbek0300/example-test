import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["roots"],
  // whitelist: ["breadcrumb"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunk),
      process.env.NODE_ENV === "development" && window.devToolsExtension
        ? window.devToolsExtension()
        : (f) => f
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
