import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

// reduxのお決まり
// stateを受け取って、どのようにpropsへ渡すか定義する
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

// こちらもお決まり
// dispatchをonTodoClickというイベントに紐付ける
// もう少しわかりやすく書くと、actionをpropsに紐づけできる
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      // actionに定義されているtoggleTodoを呼ぶ
      dispatch(toggleTodo(id));
    }
  };
};

// TodoListコンポーネントと振る舞いを結合、connectする
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
