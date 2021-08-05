import { formatTodoDate } from "../../utilits/date";

import "./todoItem.css";

export interface Todo {
  text: string;
  done: boolean;
  createdAt: Date;
}

export interface TodoItemProps {
  todo:Todo,
  onDeleteTodo: (todo:Todo) => void;
  onChangeTodoDone: (todo:Todo) => void;
}

export function TodoItem(props: TodoItemProps) {
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
