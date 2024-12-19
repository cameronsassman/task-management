import React from "react";
import { useTasks } from "../../context/TaskContext";
import "./TaskItem.css";

function TaskItem({ task, setCurrentTask }) {
  const { deleteTask, toggleCompletion } = useTasks();

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.name}</span>
      <div className="actions">
        <button onClick={() => toggleCompletion(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => setCurrentTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
