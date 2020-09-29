import React from "react";

const Todo = ({ id, text, completed, setTodos, todos }) => {
  return (
    <div>
      <div
        onClick={() => {
          setTodos(
            todos.map((todo) => {
              console.log(id === todo.id);
              console.log({ ...todo });
              return id === todo.id
                ? //what is this doing?
                  { ...todo, completed: !todo.completed }
                : todo;
            })
          );
        }}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </div>
    </div>
  );
};

export default Todo;
