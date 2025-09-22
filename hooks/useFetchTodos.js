import { useState, useEffect } from "react";

// Custom hook to fetch todos from a public API
const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export default function useFetchTodos() {
  const [todos, setTodos] = useState([]); // State to hold todos
  const [loading, setLoading] = useState(true); // Loading state while fetching

  useEffect(() => {
    // Fetch todos from API on component mount
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data); // Save fetched todos to state
        setLoading(false); // Stop loading
      })
      .catch((err) => console.error(err)); // Handle errors
  }, []); // Empty dependency array = run once on mount

  return { todos, setTodos, loading }; // Return state and setter
}
