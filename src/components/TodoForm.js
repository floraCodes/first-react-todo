import React, { useState } from "react";
import uuid from "uuid";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });

      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div className="todo-form">
      <h3>Todo List</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
