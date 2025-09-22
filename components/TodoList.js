import React from "react";
import TodoItem from "./TodoItem";

// Component for the list of todos
export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Unique key for each todo
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
