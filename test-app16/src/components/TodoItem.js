import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleCompleted, onDelete, onEdit }) {
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <span
        className="todo-text"
        onClick={() => onToggleCompleted(todo.id)}
        title="Toggle complete"
      >
        {todo.text}
      </span>
      <div className="todo-actions">
        <button onClick={() => onEdit(todo.id)} aria-label="Edit">✏️</button>
        <button onClick={() => onDelete(todo.id)} aria-label="Delete">🗑️</button>
      </div>
    </li>
  );
}

export default TodoItem;
