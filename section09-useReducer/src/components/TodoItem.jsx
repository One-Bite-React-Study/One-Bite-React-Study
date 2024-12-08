import React from 'react';
import './TodoItem.css';

export const TodoItem = ({ id, content, data, isDone, onUpdate, onDelete, ...rest}) => {  

  const onChangeCheckBox = () => onUpdate(id);

  const onClickDelete = () => onDelete(id);
  
  return (
    <div className="TodoItem">
      <input readOnly type="checkbox" checked={isDone} onChange={onChangeCheckBox} /> 
      <p className="content">{content}</p>
      <p className="date">{new Date().toLocaleDateString()}</p>
      <button type="button" onClick={onClickDelete} >삭제</button>
    </div>
  );
};
