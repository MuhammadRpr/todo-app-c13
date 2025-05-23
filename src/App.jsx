// App.jsx

import React, { useState, useEffect } from 'react';
import AddTodoModal from './components/AddTodoModal';
import TodoList from './components/TodoList';
import { FiPlus } from 'react-icons/fi';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <body>
      <div className="app">
        <header className="header">
          <h2><b>Simple</b>
            <br />
            To-Do List
          </h2>
          <hr />

        </header>

        <TodoList todos={todos} />

        {/* 🔽 Modal dirender di dalam .app */}
        <AddTodoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddTodo={addTodo}
        />
        <button onClick={() => setModalOpen(true)} className="add-button ">
          <FiPlus size={20} />
        </button>
      </div>
    </body>
  );
}
