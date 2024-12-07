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
  const idRef= useRef(todos.length);

  const onCreate = (content) =>{
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      data: new Date().getTime(),
    }

    setTodos([...todos, newTodo]);
  }

  // useEffect(()=>{
  //   console.log(todos);
    
  // }, [])

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate} />
      <List todos={todos}/>
    </div>
  )
}

export default App
