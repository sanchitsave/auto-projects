import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import initialTodos from './data/todos.json';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setEditingTodo(todos.find((todo) => todo.id === id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditingTodo(null);
  };

  return (
    <div className="app-container">
      <h1>TODO List</h1>
      <TodoForm onAddTodo={addTodo} editingTodo={editingTodo} onUpdateTodo={updateTodo} />
      <TodoList
        todos={todos}
        onToggleCompleted={toggleCompleted}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
