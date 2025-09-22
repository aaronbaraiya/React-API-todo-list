import React, { useState } from "react";
import useFetchTodos from "./hooks/useFetchTodos";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // Use custom hook to fetch todos
  const { todos, setTodos, loading } = useFetchTodos();
  const [newTodo, setNewTodo] = useState(""); // State for new todo input

  // Function to add a new todo
  const addTodo = () => {
    if (!newTodo.trim()) return; // Prevent empty todos
    const todo = {
      id: todos.length + 1, // Simple ID for local state
      title: newTodo,
      completed: false,
    };
    setTodos([todo, ...todos]); // Add new todo to top of list
    setNewTodo(""); // Clear input
  };

  // Function to toggle completion of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Show loading text while fetching
  if (loading) return <p>Loading todos...</p>;

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Todo List</h1>
      {/* Input component */}
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      {/* List component */}
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
