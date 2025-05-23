import React from 'react';

const TodoList = ({ todos }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
