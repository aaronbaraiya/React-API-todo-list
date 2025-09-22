import React from "react";

// Component for the input field and Add button
export default function TodoInput({ newTodo, setNewTodo, addTodo }) {
  return (
    <div>
      {/* Controlled input field */}
      <input
        type="text"
        value={newTodo} // Controlled by state
        onChange={(e) => setNewTodo(e.target.value)} // Update state on change
        placeholder="Add new todo"
      />
      {/* Add button triggers addTodo function */}
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
