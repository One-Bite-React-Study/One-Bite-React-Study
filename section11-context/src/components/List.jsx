import React, { useState, useMemo, useContext } from 'react';
import { MemoizedTodoItem } from './_index';
import './List.css';
import { TodoContext } from '../App';

export const List = () => {

  const { todos } = useContext(TodoContext);

  const [search, setSearch] = useState('');

  const onChangeSearch = ({ target: { value } }) => setSearch(value);

  const getFilteredData = () => {
    if (search === '') return todos;

    return todos.filter(({ content }) => content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();


  // * 2. ♻️ 컴포넌트가 렌더링될 때 마다 해당 동작이 불필요하게 실행되지 않도록 메모이제이션
  //     2.1 최초 렌더링될 때 인자로 전달한 콜백을 실행해 연산을해 값을 반환
  //     2.2 그 이후에는 의존성 배열에 담긴 값이 변경될 때 만 인자로 전달한 콜백을 실행해서 연산을 해 값을 반환한다.
  const { totalCount, douneCount, notDouneCount } = useMemo(()=>{

    console.log('getAnalyzedData 호출!');
    
    const totalCount = todos.length; // 총 todo 갯수
    const douneCount = todos.filter((todo) => !todo.isDone).length; // 체크가 안된 todo 갯수
    const notDouneCount = totalCount - douneCount; // 체크가 된 todo 갯수

    return {
      totalCount,
      douneCount,
      notDouneCount,
    };
  }, [todos]); // <- 의존성 배열 : deps  
  

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {douneCount}</div>
        <div>notDone: {notDouneCount}</div>
      </div>

      <input onChange={onChangeSearch} value={search} type="text" placeholder="검색어를 입력하세요" />

      <div className="todos_wrapper">
        {/* 필터링된 todos를 화면에 뿌려준다. */}
        {filteredTodos.length ? (
          filteredTodos.map((todo) => <MemoizedTodoItem key={todo.id} {...todo}/>)
        ) : (
          <p style={{ color: '#565656' }}> 검색 결과가 없습니다.. 🥺 </p>
        )}
      </div>
    </div>
  );
};
