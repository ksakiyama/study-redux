import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      // フィルタをセットする
      // actionで指定されたfilterを返す
      return action.filter;
    default:
      // デフォルトのSHOW_ALLを返す
      return state;
  }
};

export default visibilityFilter;
