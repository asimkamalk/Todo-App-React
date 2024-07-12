import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4 }]);
    setNewTodo("");
  };

  let UpdateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <div>
        <h2>Todo App</h2>
        <input
          type="text"
          value={newTodo}
          placeholder="Add a task"
          onChange={UpdateTodoValue}
        />
        <br />
        <br />
        <button onClick={addNewTask}>Add Tak</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <h4>Tasks Todo</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
