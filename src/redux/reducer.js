import { combineReducers } from "redux";
import user from "./user";
import roots from "./roots";
import breadcrumb from "./breadcrumb";
import modals from "./modals";
import search from "./search";

const RootReducer = combineReducers({
  user,
  roots,
  breadcrumb,
  modals,
  search,
});

export default RootReducer;
