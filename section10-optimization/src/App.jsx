import { useEffect, useRef, useReducer, useCallback } from 'react';
import { MemoizedHeader, Editor, List, Exam } from './components/_index';
import './App.css';

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

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];

    case 'UPDATE':
      return state.map((todo) => (todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo));

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.targetId);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(todos.length);

  // * `useCallback()` 적용
  // 1. 인자로 전달한 콜백이 Mount되었을 때만 딱 한번 생성이 되고 
  // 2. 그 이후에는 의존성 배열(deps)의 값에 변화가 있지 않는 이상 해당 컴포넌트가 리렌더링이 된다 하더라도 함수가 다시 생성되지 않는다.
  const onCreate = useCallback((content) =>{
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    })}, []);
  

  // * `useCallback()` 적용
  // ..
  const onUpdate = useCallback((targetId) => { 
    dispatch({ type: 'UPDATE', targetId })
  }, []);    
  
  
  // * `useCallback()` 적용
  // ..
  const onDelete = useCallback((targetId) => {
    dispatch({ type: 'DELETE', targetId })
  }, []);


  return (
    <div className="App">      
      <MemoizedHeader />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      {/* <Exam /> */}
    </div>
  );
}

export default App;
