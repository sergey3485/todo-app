import React from "react";
import "./todoList.css";

export interface Todo {
  text: string;
  done: boolean;
  createdAt: Date;
}

export interface TodoListProps {
  todo:Todo
}
export function TodoList(props: TodoListProps) {
  const { todo } =props;
  return (
    <div className="todo-list">
      <input className="checkbox" type="checkbox" checked={todo.done} />
      <div className="todo-text">{todo.text}</div>
      <div className="todo-time">{todo.createdAt.toDateString()}</div>
      <div className="delete-button">
        <button className="delete-this-todo" type="button">
          delete
        </button>
      </div>
    </div>
  );
}
