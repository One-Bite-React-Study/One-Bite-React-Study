import React from 'react';
import './TodoItem.css';

export const TodoItem = ({ content, data, isDone, ...rest}) => {  
  
  return (
    <div className="TodoItem">
      <input readOnly type="checkbox" checked={isDone}/> 
      <p className="content">{content}</p>
      <p className="date">{new Date().toLocaleDateString()}</p>
      <button type="button">삭제</button>
    </div>
  );
};
