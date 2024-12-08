## 📚 section09-useReducer

### `useReducer()`
  
  컴포넌트 내부에 새로운 `state`를 생성하는 React Hook
  모든 `useState`는 `useReducer`로 대체 가능
  상태 관리 코드를 컴포넌트 외부로 분리할 수 있음

  ```jsx
  import React, { useReducer } from 'react'

  export const Exam = () => {

    // * reducer : 변환기
    // -> 상태를 실제로 변화시키는 변환기 역할
    function reducer(state, action){ // state, actionObj
      
      console.log({state, action});
        
      // * 값을 반환해주면 반환된 값이 새로운 state 값으로 반영된다.
      switch (action.type) {
        case 'INCREASE': return state + action.data; 
        case 'DECREASE': return state - action.data;
        default: return state;
      }
    }

    // * dispatch : 발송하다, 급송하다
    // -> 상태 변화기 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickCalc = ({target: { dataset }}) =>{            

      // 인수 상태가 어떻게 변화되길 원하는지
      // -> 액션 객체
      dispatch({ type : dataset.calc, data: 1 });
    };

    return (
      <div>
        <h1>{state}</h1>
        <button onClick={onClickCalc} data-calc='INCREASE' type="button">+</button>
        <button onClick={onClickCalc} data-calc='DECREASE' type="button">-</button>
      </div>
    )
  }
  

  ```

  `useReducer()`를 이용하면 실제로 상태변화를 일으키는 코드들을 
  `reducder()`라는 함수를 통해서 외부에 분리할 수 있기 때문에 컴포넌트 내부를 비교적 간결하게 유지할 수 있다.

  <br>


  ### ♻️ Update To do list using `useReducer()`

  특정 동작을 실행할 때 `useReducer()`의 `distpatch` 함수로 **액션 객체**에 `type`과 특정 데이터를 전송해서
  해당 동작을 `reducer()` 함수 내부에서 처리해서 `state`를 업데이트 함으로서 
  훨씬더 가속성이 좋아지며 `state` 관리하기 편해졌다.

  ```jsx
  import { useEffect, useRef, useReducer } from 'react';
  import { Header, Editor, List, Exam } from './components/_index';
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


  ```

