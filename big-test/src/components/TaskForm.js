import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({
      id: Date.now(),
      title: title.trim(),
      completed: false
    });
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="task-form-input"
      />
      <button type="submit" className="task-form-button">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
