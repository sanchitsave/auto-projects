import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = e => {
    setEditTitle(e.target.value);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    if (editTitle.trim()) {
      updateTask({ ...task, title: editTitle.trim() });
      setIsEditing(false);
    }
  };

  const handleEditCancel = () => {
    setEditTitle(task.title);
    setIsEditing(false);
  };

  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      {isEditing ? (
        <form className="task-item-edit" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editTitle}
            onChange={handleEditChange}
            autoFocus
            className="task-item-edit-input"
          />
          <button type="submit" className="task-item-edit-save">Save</button>
          <button type="button" className="task-item-edit-cancel" onClick={handleEditCancel}>Cancel</button>
        </form>
      ) : (
        <>
          <span
            className="task-item-title"
            onClick={handleComplete}
            title="Toggle complete"
          >
            {task.title}
          </span>
          <div className="task-item-actions">
            <button className="task-item-edit-btn" onClick={handleEdit}>Edit</button>
            <button className="task-item-delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
