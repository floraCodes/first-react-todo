import React from "react";
import Todo from "../components/Todo";
import "./TodoList.css";

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul
      className="todo-list"
      style={{ visibility: todos.length ? "visible" : "hidden" }}
    >
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
