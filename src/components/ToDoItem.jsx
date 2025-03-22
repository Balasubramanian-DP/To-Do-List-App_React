import { useState } from "react";

export function ToDoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="mr-2" />
      {isEditing ? (
        <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} className="border p-1" />
      ) : (
        <span className={task.completed ? "line-through" : ""}>{task.text}</span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-500 ml-2">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500 ml-2">Edit</button>
        )}
        <button onClick={() => deleteTask(task.id)} className="text-red-500 ml-2">Delete</button>
      </div>
    </li>
  );
}
