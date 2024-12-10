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

<br>

### ❗️ Context API를 사용시 최적화가 풀리는 문제

- **❗️ 최적화가 풀린 문제 발생 상황**:     
  `memo()` 메서드를 사용해 최적화시킨 컴포넌트가 데이터를 props로 전달받지 않고 Context API를 통해 데이터를 공급 받자
  의도한대로 최적화가 적용되지 않는 상황이 발생   

  <br>
     
  우선 `<Context.Provider/>`도 엄연히 React의 컴포넌트이기 때문에   
  `value` `props`로 제공받는 데이터들을 감싸고 있는 객체가 변경되게 되면(`props`가 바뀌게 되면)   
  당연히 리렌더링이 발생하게 된다.   

  <br>

  그리고 객체가 바뀌게 되는 상황은 새로운 `todo` 요소를 추가하거나, 수정하거나, 삭제했을 때    
  `todos` `state`가 바뀌게 되면서 객체를 다시 생성해서 넘겨주게(`state`재설정) 되므로   
  `props`로 받는 객체가 바뀌게 된다.   
  그래서 결국 `<Context.Provider/>`도 리렌더링이 발생하는 거고 말이다.   
    
  <br>

  그럼 자식인 하위 컴포넌트들의 입장에서는 부모 컴포넌트가 리렌더링 되는 상황이므로    
  자식 컴포넌트들도 함께 리렌더링이 발생한다.   

  <br>

- **💡 최적화가 풀린 문제 발생 이유**:  
  그럼 `<TodoItem/>`컴포넌트에 `memo()` 메서드로    
  자신이 받는 `props`가 바뀌지 않으면 리렌더링이 안되도록 최적화를 적용했으나    
  리렌더링이 발생하고 있는 이유는   

  **`todos` `state`가 변경될 때 마다 해당 `<App/>` 컴포넌트가 리렌더링 됨으로서   
  `<Context.Provider/>`의 `value props`에 전달하는 객체가 다시 생성이 되기 때문이다.**   

  - `src/App.jsx`
  ```jsx

  <TodoContext.Provider 
        value={{ // <- * ❗️ value Props로 전달하는 객체가 다시 생성된다!
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }} 
    >
    <Editor/>                
    <List/>        
  </TodoContext.Provider>

  ```
  <br>

  그렇기 때문에 이렇게 `useContext()`로 `TodoContext`로 불러오는 데이터인 해당 객체 자체가 다시 생성이 되어서   
  결국에는 Context API로 데이터를 공급받는 해당 컴포넌트도 리렌더링이 발생하게 되는 것이다.   
  
  <br>
  
  왜냐하면 `memo()`메서드를 적용했더라도 이렇게 `useContext()`로 부터 불러온 값이 변경이 되면   
  이러한 동작은 `props`가 변경된 것과 동일하게 리렌더링을 발생시키기 때문이다.   
  (`memo()` 메서드는 해당 컴포넌트가 받는 `props`가 변경되면 리렌더링 시킨다.)   

  - `src/components/TodoItem.jsx`
  ```jsx

    ...
    import React, { memo, useContext } from 'react';
    import { TodoContext } from '../App';

    const TodoItem = ({ id, content, data, isDone, ...rest}) => {  

      // *  ↓ 따라서 아래의 객체가 다시 생성이 된다.
      const { onUpdate, onDelete } = useContext(TodoContext);

      const onChangeCheckBox = () => onUpdate(id);

      const onClickDelete = () => onDelete(id);
      
      return (
          ...
      );
    };

  ```

  <br>


#### 💡 어떻게 해결할 수 있을까?

  그럼 위와 같은 문제는 어떻게 해결할 수 있냐면 **Context**를 두 개의 컨텍스트로 분리해서 해결할 수 있다.   

  **Context**를 각각 변경될 수 있는 값들을 담을 **Context**를 하나 생성하고   
  변경되지 않는 값들을 담을 **Context**를 하나 생성해주는 것이다.   

  그리고 결국에 변경되지 않는 값들을 담을 객체 또한 해당 컴포넌트가 리렌더링될 경우   
  다시 생성됨으로 리렌더링으로 인해 다시 생성되지 않게 `useMemo()`로 메모이제이션을 해준다.

  - `src/App.jsx`
  ```jsx
    import { useEffect, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
    ...

    ...

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
            
          {/* -> ♻️ `<TodoStateContext.Provider/>`에는 변경될 수 있는 값들을 value Props에 넣어준다. */}
          <TodoStateContext.Provider value={todos} >
          
          {/* -> ♻️ `<TodoDispatchContext.Provider/>`에는 변경되지 않을 값들을 value Props에 넣어준다. */}
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

  ```

  <br>


  - `src/components/List.jsx`
  ```jsx

    import React, { ..., useMemo, useContext } from 'react';
    ...
    import { TodoStateContext } from '../App';

    export const List = () => {

      // * 변경될 수 있는 값들을 담은 Context `TodoStateContext`를 불러온다.
      const todos = useContext(TodoStateContext);

      ...            

      return (
        ...
      );
    };


  ```

  <br>


  - `src/components/TodoItem.jsx`
  ```jsx
    ...
    import React, { memo, useContext } from 'react';
    import { TodoDispatchContext } from '../App';

    const TodoItem = ({ id, content, data, isDone, ...rest}) => {  


      // * 변경되지 않는 값들을 담은 Context `TodoStateContext`를 불러온다.
      const { onUpdate, onDelete } = useContext(TodoDispatchContext);

      ...
      
      return (
        ...
      );
    };

  ```


