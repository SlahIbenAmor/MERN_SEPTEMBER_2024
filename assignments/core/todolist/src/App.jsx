import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.length>0) {
      const newTaskItem = { text: newTask, completed: false };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const handleToggleCompletion = (indexToToggle) => {
    setTasks(
      tasks.map((task, index) =>
        index === indexToToggle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(index)}
            onToggle={() => handleToggleCompletion(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

