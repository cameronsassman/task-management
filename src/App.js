import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <TaskProvider>
      <div className="app">
        <h1>Task Management App</h1>
        <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
        <TaskList setCurrentTask={setCurrentTask} />
      </div>
    </TaskProvider>
  );
}

export default App;
