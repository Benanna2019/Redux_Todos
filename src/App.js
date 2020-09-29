import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: "read new Tolkein books I got today", completed: false },
    { id: 1, text: "drink some coffee", completed: true },
  ]);
  const [visibilityFilter, setVisibilityFilter] = useState("SHOW_ALL");
  console.log(todos);
  console.log(visibilityFilter);
  return (
    <div>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList
        visibilityFilter={visibilityFilter}
        todos={todos}
        setTodos={setTodos}
      />
      <Footer setVisibilityFilter={setVisibilityFilter} />
    </div>
  );
}

export default App;
