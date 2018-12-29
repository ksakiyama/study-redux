const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // TODOを追加する
      // すでに追加したTODOと結合した配列を返す
      return [
        ...state,
        {
          id: action.id,     // 新規TODOのid
          text: action.text, // 新規TODOのtext
          completed: false   // 未完了
        }
      ];
    case "TOGGLE_TODO":
      // TODOを完了or未完了に変える
      // idが同じTODOを見つけたらcompletedを入れ替える
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      // 上記2パタン以外は何もせず、state（登録済みTODO）を返す
      return state;
  }
};

export default todos;
