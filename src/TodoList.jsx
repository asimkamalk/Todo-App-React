import React, { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["sample task"]);
  let [newTodo, setNewTodo] = useState("");
  return (
    <>
      <div>
        <h2>Todo App</h2>
        <input type="text" placeholder="Add a task" value={newTodo} />
        <br />
        <br />
        <button>Add Tak</button>
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
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
