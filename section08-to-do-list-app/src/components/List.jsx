import React, { useState } from 'react';
import { TodoItem } from './_index';
import './List.css';

export const List = ({ todos }) => {
  const [search, setSearch] = useState(todos);

  const getFilteredData = ({ target: { value } }) => {

    if(search === '') {
      alert('검색어를 입력해주세요.')
      return;
    }
    
    const filteredData = todos.filter(({ content }) => content.toLowerCase().includes(value.toLowerCase()));

    setSearch(filteredData);
  };

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input onChange={getFilteredData} type="text" placeholder="검색어를 입력하세요" />

      <div className="todos_wrapper">
        {search.map(({ id, ...todo }) => (
          <TodoItem key={id} {...todo} />
        ))}
      </div>
    </div>
  );
};
