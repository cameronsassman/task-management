import React, { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList({ setCurrentTask }) {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter((task) => task.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="task-list">
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} setCurrentTask={setCurrentTask} />
      ))}
    </div>
  );
}

export default TaskList;
