import { useEffect, useRef, useReducer } from 'react';
import './App.css';
import { Header, Editor, List, Exam } from './components/_index';

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

  // 새로운 데이터 생성
  const onCreate = (content) =>
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });

  // TodoItem 체크 박스를 클릭했을 때 실행
  const onUpdate = (targetId) => dispatch({ type: 'UPDATE', targetId });

  // TodoItem 삭제 버튼을 클릭했을 때 실행
  const onDelete = (targetId) => dispatch({ type: 'DELETE', targetId });

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      {/* <Exam /> */}
    </div>
  );
}

export default App;
