import React, { useState } from "react";
import "./App.css";

import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import { TodoList, Todo } from "../TodoList/TodoList";

export function App() {
  const [todoList, setTodo] = useState<Todo[]>([]);

  return (
    <div className="app-container">
      <Header />
      <div className="todo-list-container">
        <TodoList />
      </div>
      <Input />
    </div>
  );
}
