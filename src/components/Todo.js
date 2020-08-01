import React from 'react';
import './Todo.css';

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <li className="todo-div">
      <label className="checkbox-label">
        <input type="checkbox" checked={todo.completed} />
        <span className="checkbox-custom" onClick={handleCheckboxClick}></span>
      </label>
      <p
        style={{
          textDecoration: todo.completed ? 'line-through' : null
        }}
      >
        {todo.task}
      </p>
      <button onClick={handleRemoveClick}>X</button>
    </li>
  );
}

export default Todo;
