import React, { useState } from "react";
import "./App.css";

import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import { TodoList, Todo } from "../TodoList/TodoList";

export function App() {
  const [todoList, setTodo] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.currentTarget.value;
    setText(newText);
  };
  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text) {
      return;
    }

    const newTodo = {
      text,
      done: false,
      createdAt: new Date(),
    };

    setTodo([...todoList, newTodo]);
    setText("");
  };

  return (
    <div className="app-container">
      <Header  counter={todoList.length}/>
      <div className="todo-list-container">
        {todoList.map((todo, index) => (
          <TodoList todo={todo} />
        ))}
      </div>
      <Input text={text} onChangeText={changeText} onAddTodo={addTodo} />
    </div>
  );
}
