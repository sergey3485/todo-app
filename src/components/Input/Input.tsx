import React from "react";
import "./input.css";

import { Todo } from "../TodoList/TodoList";

export function Input() {
  return (
    <form className="input-container">
      <input className="todo-input" type="text" placeholder="Add todo" />
      <button className="add-todo">Add</button>
    </form>
  );
}
