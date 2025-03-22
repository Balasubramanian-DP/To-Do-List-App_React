// App.js
import { useState } from "react";
import { ToDoList } from "./components/ToDoList";
import { Header } from "./components/Header";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <Header />
      <div className="w-full max-w-md bg-white p-5 rounded-lg shadow-lg">
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border rounded-l"
          />
          <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded-r">
            Add
          </button>
        </div>
        <ToDoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
}
