import React from "react";

const TodoList = props => {
  return (
    <div className="Todolist">
      <ul>
        <li>
          {props.todo}{" "}
          <span>
            <i className="fas fa-times" onClick={props.deleteTodo} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
