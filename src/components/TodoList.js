import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, boundToggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          boundToggleTodo={boundToggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
