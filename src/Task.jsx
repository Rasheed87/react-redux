// Task.js
import React from "react";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.description}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
