import React from "react";
import Todo from "../components/Todo";
import "./TodoList.css";

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    //Now we'll map over the todos (passed as props)
    <ul
      className="todo-list"
      style={{ visibility: todos.length ? "visible" : "hidden" }}
    >
      {todos.map(todo => (
        //remember that each element should have a unique key
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
