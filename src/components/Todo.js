import React from "react";

const Todo = ({ id, text, completed }) => {
  return (
    <div>
      <div style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </div>
    </div>
  );
};

export default Todo;
