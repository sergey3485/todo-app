import * as React from "react";

import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import { TodoItem, Todo } from "../TodoItem/TodoItem";

import { saveToLocalStorage, readFromLocalStorage } from "../../utilits/storage"

import "./App.css";

export function App() {
  const [todoList, setTodo] = React.useState<Todo[]>(readFromLocalStorage("todos") ?? []);
  const [text, setText] = React.useState("");

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.currentTarget.value;
    setText(newText);
  };

  React.useEffect(() => {
    saveToLocalStorage("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
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

  const deleteTodo = (todo:Todo) => {
    const filtredTodoList = todoList.filter((item) =>  item !== todo )
    setTodo(filtredTodoList);
  }
  const changeTodoDone = (todo:Todo) => {
    const changedTodoList = todoList.map((item) => {
      if (item === todo) {
        return {
          text: item.text,
          createdAt: item.createdAt,
          done: !item.done
        }
      }
      return item;
    })
    setTodo(changedTodoList);
  }

  const сlearTodoList = () => {
    setTodo([]);
  }

  let filtredDoneTodoList = todoList.filter((item) => item.done === false).length;

  const checkTodoListLenght = todoList.length > 1;

  return (
    <div className="app-container">
      <Header  counter={todoList.length} remainCounter={filtredDoneTodoList} />
      {checkTodoListLenght && <button className="clear-button" onClick={сlearTodoList}>Clear</button>}
      <div className="todo-list-container">
        {todoList.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDeleteTodo={deleteTodo} onChangeTodoDone={changeTodoDone}/>
        ))}
      </div>
      <Input text={text} onChangeText={changeText} onAddTodo={addTodo} />
    </div>
  );
}
