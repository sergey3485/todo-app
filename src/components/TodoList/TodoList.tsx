import React from "react";
import "./todoList.css";

export interface Todo {
  text: string;
  done: boolean;
  createdAt: Date;
}

export function TodoList() {
  return (
    <div className="todo-list">
      <input className="checkbox" type="checkbox" />
      <div className="todo-text">Cделать todo</div>
      <div className="todo-time">5:40</div>
      <div className="delete-button">
        <button className="delete-this-todo" type="button">
          delete
        </button>
      </div>
    </div>
  );
}
