import React from "react";
import "./input.css";

export interface InputProps {
  text: string;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: (event: React.FormEvent<HTMLFormElement>) => void;
}
export function Input(props: InputProps) {
  const {text, onChangeText, onAddTodo} = props;
  return (
    <form className="input-container" onSubmit={onAddTodo}>
      <input className="todo-input" type="text" value={text} onChange={onChangeText} placeholder="Add todo" />
      <button className="add-todo">Add</button>
    </form>
  );
}
