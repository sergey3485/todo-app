import React from "react";
import "./todoList.css";
import { formatTodoDate } from "../../utilits/date";

export interface Todo {
  text: string;
  done: boolean;
  createdAt: Date;
}

export interface TodoListProps {
  todo:Todo,
  onDeleteTodo: (todo:Todo) => void;
  onChangeTodoDone: (todo:Todo) => void;
}
export function TodoList(props: TodoListProps) {
  const { todo, onDeleteTodo, onChangeTodoDone } =props;
  return (
    <div className="todo-list">
      <input className="checkbox" type="checkbox" checked={todo.done} onChange={() => onChangeTodoDone(todo)}/>
      <div className="todo-text">{todo.text}</div>
      <div className="todo-time">{formatTodoDate(todo.createdAt)}</div>
      <div className="delete-button">
        <button className="delete-this-todo" type="button" onClick={() => onDeleteTodo(todo)}>
          delete
        </button>
      </div>
    </div>
  );
}
