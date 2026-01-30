import React, { useState } from "react";
import "./App.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChnage = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
      //   setTodoList((prev) => [...prev, newTodo]);
      setInput(" ");
    }
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const todoCompleted = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={handleChnage}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => todoCompleted(todo.id)}
            />
            <span className={todo.completed ? "strike" : ""}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
