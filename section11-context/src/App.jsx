import { useEffect, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
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

// * 🧑‍🧒‍🧒 Context는 컴포넌트 외부에 선언을 한다.
// -> 왜냐하면 만약에 컴포넌트 내부에서 Context 객체를 생성하게 되면 
//    해당 컴포넌트가 리렌더링이 될 때 마다 계속해서 해당 컴포넌트 함수가 재실행 되면서 계속 새로운 Context를 호출하기 때문이다.
// -> 결국에 Context의 역할은 데이터를 하위 컴포넌트들에게 공급을 해주기만 하면 되므로 
//    굳이 컴포넌트가 리렌더링 될 때마다 다시 Context가 생성될 필요가 없다.
// export const TodoContext = createContext();

// * Context 분리하기
export const TodoStateContext = createContext(); // 변화할 값들을 담을 Context
export const TodoDispatchContext = createContext(); // 변화 하지 않을 값들을 담을 Context


// * `Context.Provider` / <Context.Provider>
// -> Context가 공급할 데이터를 설정하거나 Context의 데이터를 공급받을 컴포넌트들을 설정하기 위해서 사용하는 프로퍼티이며 컴포넌트이다.
// console.log(TodoContext.Provider); 


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


  // * 📝 해당 컴포넌트가 리렌더링될 때 객체가 다시 생성되지 않도록 메모이제이션
  const memoizedDispatch = useMemo(()=>{
    return  { onCreate, onUpdate, onDelete };
  }, []);


  return (
    <div className="App">      
      <MemoizedHeader />
      
      {/* - `<Context.Provider/>`컴포넌트 아래에 있는 모든 컴포넌트들은 전부 다 해당 Context의 데이터를 공급받을 수 있게 된다. */}
      {/* - 공급할 데이터는 `<Context.Provider/>`컴포넌트에 `value`라는 `props`로 전달을 해주면 된다. */}
      {/* <TodoContext.Provider 
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }} 
      > */}
        
      {/* -> `<TodoStateContext.Provider/>`에는 변경될 수 있는 값들을 value Props에 넣어준다. */}
      <TodoStateContext.Provider value={todos} >
        
      {/* -> `<TodoDispatchContext.Provider/>`에는 변경되지 않을 값들을 value Props에 넣어준다. */}
      <TodoDispatchContext.Provider value={memoizedDispatch} >

        <Editor/>                
        <List/>        

      </TodoDispatchContext.Provider>

      </TodoStateContext.Provider>

      {/* </TodoContext.Provider> */}
    </div>
  );
}

export default App;
