import React from "react";

// Component for a single todo item
export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none", // Strike-through completed todos
        margin: "10px 0",
      }}
    >
      {/* Click on text toggles completion */}
      <span onClick={() => toggleComplete(todo.id)} style={{ cursor: "pointer" }}>
        {todo.title}
      </span>
      {/* Delete button */}
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
}
