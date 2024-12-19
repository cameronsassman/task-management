import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>
    setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
  const editTask = (id, updatedName) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: updatedName } : task
      )
    );
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleCompletion = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, editTask, deleteTask, toggleCompletion }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
