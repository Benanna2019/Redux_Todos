import React, { useState } from "react";
import VisibleTodoList from "./containers/VisibleTodoList";
import AddTodo from "./components/AddTodo";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 0, text: "read new Tolkein books I got today", completed: false },
  //   { id: 1, text: "drink some coffee", completed: true },
  // ]);
  const [visibilityFilter, setVisibilityFilter] = useState("SHOW_ALL");
  console.log(visibilityFilter);
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      {/* <TodoList visibilityFilter={visibilityFilter} />
      <Footer setVisibilityFilter={setVisibilityFilter} /> */}
    </div>
  );
}

export default App;
