import React, { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import "./TaskForm.css";

function TaskForm({ currentTask, setCurrentTask }) {
  const { addTask, editTask } = useTasks();
  const [taskName, setTaskName] = useState(currentTask ? currentTask.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return alert("Task name cannot be empty");

    if (currentTask) {
      editTask(currentTask.id, taskName);
      setCurrentTask(null);
    } else {
      addTask(taskName);
    }
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">{currentTask ? "Update" : "Add"}</button>
    </form>
  );
}

export default TaskForm;
