import React from 'react';
import './TodoItem.css';

export const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <p className="content">Todo..</p>
      <p className="date">Date</p>
      <button type="button">삭제</button>
    </div>
  );
};
