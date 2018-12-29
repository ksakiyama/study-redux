import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          // addTodo actionに値を渡す
          // ここのdispatchとは何か？
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">AddTodo</button>
      </form>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
