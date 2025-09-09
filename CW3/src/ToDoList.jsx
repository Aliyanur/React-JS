import React, { useState, useEffect } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (tasks.length > 10) {
      alert("You have more than 10 jobs to do");
    }
  }, [tasks]);

  const addTask = () => {
    const value = input.trim();
    if (!value) return;
    setTasks(prev => [...prev, value]);
    setInput("");
  };

  return (
    <div style={{ margin: 20, fontFamily: "Arial" }}>
      <h2>ToDo List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") addTask(); }}
      />
      <button type="button" onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}