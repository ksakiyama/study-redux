import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

// combineReducersで個別に定義したreducerを結合できる
// exportに指定することで、すべてのreducerをimportできる
export default combineReducers({
  todos,
  visibilityFilter
});
