import React, { useState } from 'react';
import { TodoItem } from './_index';
import './List.css';

export const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  // input에 onChange가 실행될때 마다 해당 값을  `search` state에 설정 
  const onChangeSearch = ({target: { value }}) => setSearch(value);

  // - 만약 `search`가 빈 문자열이면 `todos`를 반환
  // - `search` state가 변경되어 해당 컴포넌트가 리렌더링(Update)될 때 마다 `todos`를 필터링해서 반환
  const getFilteredData = () => {

    if(search === '') return todos;

    return todos.filter(({ content }) => content.toLowerCase().includes(search.toLowerCase()));    
  };

  // 컴포넌트가 리렌더링(Update) 될 때 마다 다시 실행되므로 필터링된 반환 값을 화면에 뿌려준다.
  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input onChange={onChangeSearch} value={search} type="text" placeholder="검색어를 입력하세요" />

      <div className="todos_wrapper">
        {/* 필터링된 todos를 화면에 뿌려준다. */}
        { filteredTodos.length ?  filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        )) : <p style={{color: '#565656'}}> 검색 결과가 없습니다.. 🥺 </p>      
        }
      </div>
    </div>
  );
};
