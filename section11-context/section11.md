## 📚 section11-context

### 🧑‍🧒‍🧒 React Context

컴포넌트간의 데이터를 전달하는 또 다른 방법   
기존의 `props`가 가지고 있던 단점을 해결할 수 있다.   
   
`props`는 **부모 -> 자식** 으로만 데이터를 전달할 수 있었다.    
   
`부모 -> 자식A -> 자식B` 관계가 있을 경우   
부모에서 자식B로 데이터를 `props`로 전달하기 위해서는 `자식A`를 거쳐야 했다.   
어쩔 수 없이 불필요하게 `자식A`를 중간 다리 처럼 거쳐서 전달해야 경우가 많아지게 되는데   
당연히 이런 방식은 좋은 방법이 아니다.

만약 이러한 더 깊이가 깊어질 경우   
`부모 -> 자식A -> 자식B -> 자식C -> 자식D -> 자식E -> 자식F`   
`부모`에서 `자식F`까지 데이터를 `props`로 전달하려면 불필요하게 거쳐야하는 동작이 많아진다(Props Drilling).   
   
이를 해결하기 위해 나온게 **Context API**   

**Context**는 일종의 데이터 보관소 역할을 하는 객체이다.   
**Context**를 새롭게 생성한 다음에 자식 컴포넌트에게 `props`로 전달하려는 데이터들을   
**Context**에다가 보관해 놓으면 `props`로 직접 넘겨주지 않아도    
**Context**를 통해서 **직통**으로 해당 데이터를 필요로하는 자식 컴포넌트에게 데이터를 전달해서 공급해줄 수 있다.   
그리고 이렇게 함으로써 *Props Drilling*이라는 문제를 해결할 수 있게 된다.   
   
<br>


### 📂 `useContext`



- `src/App.jsx`
  ```jsx
  import { ..., createContext } from 'react';

  // * 🧑‍🧒‍🧒 Context는 컴포넌트 외부에 선언을 한다.
  // -> 왜냐하면 만약에 컴포넌트 내부에서 Context 객체를 생성하게 되면 
  //    해당 컴포넌트가 리렌더링이 될 때 마다 계속해서 해당 컴포넌트 함수가 재실행 되면서 계속 새로운 Context를 호출하기 때문이다.
  // -> 결국에 Context의 역할은 데이터를 하위 컴포넌트들에게 공급을 해주기만 하면 되므로 
  //    굳이 컴포넌트가 리렌더링 될 때마다 다시 Context가 생성될 필요가 없다.
  export const TodoContext = createContext();

  // * `Context.Provider` / <Context.Provider>
  // -> Context가 공급할 데이터를 설정하거나 Context의 데이터를 공급받을 컴포넌트들을 설정하기 위해서 사용하는 프로퍼티이며 컴포넌트이다.
  // console.log(TodoContext.Provider); 


  function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
      ...

    const onCreate = useCallback((content) =>{
      ...
      })}, []);
    

    // * `useCallback()` 적용
    // ..
    const onUpdate = useCallback((targetId) => { 
      ...
    }, []);    
    
    
    // * `useCallback()` 적용
    // ..
    const onDelete = useCallback((targetId) => {
        ...
    }, []);


    return (
      <div className="App">      
        <MemoizedHeader />
        
        {/* - `<Context.Provider/>`컴포넌트 아래에 있는 모든 컴포넌트들은 전부 다 해당 Context의 데이터를 공급받을 수 있게 된다. */}
        {/* - 공급할 데이터는 `<Context.Provider/>`컴포넌트에 `value`라는 `props`로 전달을 해주면 된다. */}
        <TodoContext.Provider 
          value={{
            todos,
            onCreate,
            onUpdate,
            onDelete,
          }} 
        >
          {/* <Editor onCreate={onCreate} /> */}
          <Editor/>
          
          <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
          {/* <List/>         */}
        </TodoContext.Provider>

      </div>
    );
  }

  export default App;


  ```
  

<br>

- `src/components/Editor.jsx`
  ```jsx
  import React, { ..., useContext } from 'react'
  import { TodoContext } from '../App';
  ...

  export const Editor = () => {

    // * `useContext()`에 인수로 데이터를 불러오고자 하는 Context를 직접 넣어준다.
    // -> 인수로 전달한 Context로 부터 공급된 데이터를 반환해준다.
    const { onCreate } = useContext(TodoContext);
    
    ...

    const onSubmit = () => {
      ...

      onCreate(inputRef.current.value);

      ...
    }

    const onKeyDown = ({keyCode})=> (keyCode === 13) && onSubmit();

    return (
      <div className='Editor'>
        <input onKeyDown={onKeyDown} ref={inputRef} type='text' placeholder='새로운 Todo..'/>
        <button onClick={onSubmit} type="button">추가</button>
      </div>
    )
  }

  ```