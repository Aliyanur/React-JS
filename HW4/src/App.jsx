import React, { useCallback, useRef, useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const addTask = useCallback(() => {
    const text = inputRef.current.value.trim();
    if (text !== "") {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks([...tasks, newTask]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, [tasks]);

  const toggleTask = useCallback(
    (id) => {
      const updated = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(updated);
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (id) => {
      const filtered = tasks.filter((task) => task.id !== id);
      setTasks(filtered);
    },
    [tasks]
  );

  return (
    <div className="app">
      <h1>To Do List</h1>
      <div className="input-group">
        <input ref={inputRef} type="text" placeholder="Enter new task" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}