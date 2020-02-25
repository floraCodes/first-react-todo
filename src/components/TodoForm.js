import React, { useState } from "react";
import uuid from "uuid";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  //we need to define some state to keep track of input from the user
  //We'll define a state called todo, and we'll initialize it to 3 properties:
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });
  // we need to define a function to handle when the user types an input for a todo, so we can keep track of it on state.
  //This function will be responsable for updating the task property of the todo
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    //The following condition checks if the todo is "" or not
    if (todo.task.trim()) {
      //adding a new todo with the updated id property
      //uuid will give us the updated todo id
      addTodo({ ...todo, id: uuid.v4() });
      //reset task input (rest the form)
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
