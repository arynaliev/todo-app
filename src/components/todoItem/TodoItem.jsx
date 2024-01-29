import React from "react";
import "./todoItem.style.css";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="text">
        <input type="checkbox" />
        <p>{todo.text} </p>
      </div>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </div>
  );
};

export default TodoItem;
