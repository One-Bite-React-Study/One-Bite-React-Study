import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';

const mockData = [
  {
    id: 0,           // 사람으로 치면 주민등록번호
    isDone: false,
    content: "React 공부하기",
    data: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    data: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    data: new Date().getTime(),
  }
]

function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <>
      <div className="App">
        <Header />
        <Editor />
        <List />
      </div>
    </>
  );
}

export default App;
