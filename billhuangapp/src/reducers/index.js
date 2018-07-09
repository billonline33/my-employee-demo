import { combineReducers } from "redux";
import SortBy from "./sortBy";
import employeeList from "./employeeList";

export default combineReducers({
  SortBy,
  employeeList
});
