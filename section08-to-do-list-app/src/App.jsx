import { useEffect, useRef } from 'react';
import './App.css';
import { Header, Editor, List } from './components/_index';
import React, { useState } from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React Study',
    data: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'Doing laundry',
    data: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'Sining',
    data: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(todos.length);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      data: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  // 체크 박스를 클릭했을 때 실행
  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 `todoItem`의 `isDone` 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId
          ? {
              // targetId와 id 값이 같은 요소일 경우
              // 기존 todo요소를 spread operator로 흩뿌리고, `isDone`속성을 not연산자로 반전 시켜 `isDone`속성에 적용한다.
              ...todo,
              isDone: !todo.isDone,
            }
          : todo; // 걸리는 요소가 없으면 기존 `todo`를 반환
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
