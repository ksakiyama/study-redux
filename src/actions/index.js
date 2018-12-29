let nextTodoId = 0; // TODOのIDのシーケンス

// textを受け取り、TODOの新規IDとtextを渡す
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

// TODOリストのフィルタリング
export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter // filterのタイプを渡す
});

// ステータス（完了、未完了）を変更する
export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id // ステータスを変更するのみなので、IDだけ渡せばよい
});

// フィルタの種類を定義
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
