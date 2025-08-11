import React, { useState, useEffect } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTodo, editingTodo, onUpdateTodo }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput('');
    }
  }, [editingTodo]);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    if (editingTodo) {
      onUpdateTodo(editingTodo.id, input);
    } else {
      onAddTodo(input);
    }
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        value={input}
        placeholder={editingTodo ? "Edit TODO..." : "Add a new TODO..."}
        onChange={handleChange}
        className="todo-input"
        autoFocus
      />
      <button type="submit" className="todo-btn">
        {editingTodo ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default TodoForm;
