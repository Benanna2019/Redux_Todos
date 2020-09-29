import React from "react";
import VisibleTodoList from "./containers/VisibleTodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 0, text: "read new Tolkein books I got today", completed: false },
  //   { id: 1, text: "drink some coffee", completed: true },
  // ]);

  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      {/* <TodoList visibilityFilter={visibilityFilter} />
      <Footer setVisibilityFilter={setVisibilityFilter} /> */}
      <Footer />
    </div>
  );
}

export default App;
