import React, { useState, useEffect } from 'react';
import './TaskModal.css';

const priorityColors = {
  High: '#ff5252',
  Medium: '#ffd600',
  Low: '#69f0ae',
};

export default function TaskModal({ isOpen, task, onClose, onSave }) {
  const [editTask, setEditTask] = useState({ ...task });

  useEffect(() => {
    setEditTask({ ...task });
  }, [task]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleTagChange = (e) => {
    setEditTask((prev) => ({ ...prev, tags: e.target.value.split(',').map(t => t.trim()) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editTask);
  };

  return (
    <div className="task-modal-overlay" onClick={onClose}>
      <div
        className="task-modal"
        onClick={e => e.stopPropagation()}
        style={{ borderTop: `6px solid ${priorityColors[editTask.priority] || '#ccc'}` }}
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit}>
          <label>Title
            <input type="text" name="title" value={editTask.title || ''} onChange={handleChange} required />
          </label>
          <label>Due Date
            <input type="date" name="dueDate" value={editTask.dueDate || ''} onChange={handleChange} />
          </label>
          <label>Priority
            <select name="priority" value={editTask.priority || 'Medium'} onChange={handleChange}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          <label>Tags
            <input
              type="text"
              name="tags"
              value={editTask.tags ? editTask.tags.join(', ') : ''}
              onChange={handleTagChange}
              placeholder="Comma separated"
            />
          </label>
          <label>Notes
            <textarea name="notes" value={editTask.notes || ''} onChange={handleChange} />
          </label>
          <button type="submit" className="save-btn">Save</button>
        </form>
      </div>
    </div>
  );
}
