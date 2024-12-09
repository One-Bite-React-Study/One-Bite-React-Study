## 📚 section10-optimization


### ♻️ React App 내부의 최적화 방법

- 컴포넌트 내부의 불 필요한 연산 방지
- 컴포넌트 내부의 불 필요한 함수 재생성 방지
- 컴포넌트의 불 필요한 리렌더링 방지



### 📝 `useMemo()`

  "메모이제이션" 기법을 기반으로 불 필요한 연산을 최적화 하는 리액트 훅
  ( Memoization: 기억해두기, 메모해두기 )

  `useMemo()`훅을 이용하면 원하는 어떠한 연산을
   특정 조건(**의존성 배열 deps**)이 만족하지 않았을 때는 다시 수행하지 않도록 만들 수 있으며

   그런 연산의 결과값을 반환 받아 사용할 수 있으므로 상당히 유용한 React Hook 이다.

  ```jsx

  //  * 1. ❗️ 컴포넌트가 state 변화로 인해 리렌더링될 때 마다 매번 선언되고 호출되고를 반복하고 있다.
  // const getAnalyzedData = () => {
  //   console.log('getAnalyzedData 호출!');
    
  //   const totalCount = todos.length; // 총 todo 갯수
  //   const douneCount = todos.filter((todo) => !todo.isDone).length; // 체크가 안된 todo 갯수
  //   const notDouneCount = totalCount - douneCount; // 체크가 된 todo 갯수

  //   return {
  //     totalCount,
  //     douneCount,
  //     notDouneCount,
  //   };
  // };

  // const { totalCount, douneCount, notDouneCount } = getAnalyzedData();


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

  ```

<br>


### 📝 `React.memo()` 1

  해당 컴포넌트의 `props`가 변경되지 않았을 때 리렌더링 되지 않도록 최적화가 이루어진 컴포넌트를 반환한다.

  ```jsx

    import React, { memo } from 'react'
    import './Header.css'

    {/* ❗️ 부모 컴포넌트인 <App/>컴포넌트의 상태 변화에 의해서 불필요한 리렌더링 되고 있는 상황 */}
    const Header = () => {
      return (
        <div className='Header' >
          <h3>오늘은 📆</h3>
          <h1>{new Date().toDateString()}</h1>
        </div>
      )
    }

    // * ♻️ 인수로 최적화 하려는 컴포넌트인 함수를 그대로 전달한다.
    // 1. `memo()` 메서드는 인수로 받은 컴포넌트 함수를 `props`가 변경되지 않았을 때에는 리렌더링 하지 않도록 최적화해서 반환한다.
    //  1.1. `memo()` 메서드로 최적화 된 컴포넌트는 자신이 받는 props가 바뀌지 않으면 다시는 리렌더링이 발생되지 않는다.
    // 2. 반환된 최적화가 이루어진 컴포넌트를 내보낸다(export).
    // export default memo(Header);
    export const MemoizedHeader = memo(Header);

  ```

  <br>

  
  ###  📝 `React.memo()` 2


  1. `state`가 변경되면 해당 컴포넌트가 리렌더링된다.   
  2. 리렌더링 된다는 건 즉 해당 컴포넌트인 함수가 재실행 되면서 내부에 함수 선언 및 변수 등 모두 새롭게 생성된다.   
    2.1. 함수는 객체 타입(Reference Type)에 해당하므로 리렌더링되어 새롭게 생성된 함수들이 동일한 동작을 하는 함수라 하더라도   
          새롭게 생성될 때마다 아예 다른 값으로 인식이 된다.             
          ( 객체 타입(Reference Type)에 해당하는 값은 변수에 주소값으로써 저장이 되며    
            객체간의 비교는 기본적으로 주소값을 기반으로 수행이 되기 때문이다. )
      
      ```jsx

        // 다음과 같이 두 객체가 내부적으로 완벽히 동일하더라도 생성될 때 마다 주소값이 다르기 때문에
        // 비교를 해보면 다르게 평가된다.
        const a = { a: 1 };
        const b = { a: 1 };

        console.log(a=== b); // false

      ```      


      2.2. 객체 타입(Reference Type)에 해당하는 함수 또한 컴포넌트가 리렌더링 되면서   
            새롭게 다시 생성이 되면 주소값이 계속 바뀌기 때문에 사실상 매번 다른 값으로 생성되는 것으로 판단이 된다.




  <br>

  ```jsx

  import React, { memo } from 'react';
  import './TodoItem.css';

  const TodoItem = ({ id, content, data, isDone, onUpdate, onDelete, ...rest}) => {  

    const onChangeCheckBox = () => onUpdate(id);

    const onClickDelete = () => onDelete(id);
    
    return (
      <div className="TodoItem">
        <input readOnly type="checkbox" checked={isDone} onChange={onChangeCheckBox} /> 
        <p className="content">{content}</p>
        <p className="date">{new Date().toLocaleDateString()}</p>
        <button type="button" onClick={onClickDelete} >삭제</button>
      </div>
    );
  };
    
    // 1. `memo()`메서드에 인수로 전달한 해당 컴포넌트를 `props`가 변경되지 않는 이상 리렌더링되지 않도록 최적화시켜 반환되도로 한다.
    //  1.1. 두 번째 인자에 콜백을 전달해 최적화 기능을 커스터마이징 한다.
    //  1.2. 두 번째 인자에 콜백을 전달하게 되면 `memo()` 해당 컴포넌트의 `props`가 바뀌었는지 스스로 판단하지 않고
    //       콜백에 매개변수로 들어오는 과거의 props -> `pervProps` 와
    //       현재의 props -> `nextProps`를 비교해서
    //       콜백의 반환 값에 따라서 props가 바뀌었는지를 판단한다.
    // 2. 판단 값에 따라서 리렌더링을 실행하고 최적화가 된 컴포넌트를 내보낸다.    
    
    export const MemoizedTodoItem = memo(TodoItem, (prevProps, nextProps)=>{
      // * 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
      // - True를 반환 -> Props 바뀌지 않음 -> 리렌더링 X
      // - False를 반환 -> Props 바뀜 -> 리렌더링 O

      // 전달받는 `props`에서 객체 타입(Reference Type)인 함수를 제외한 `props`값들을 서로 비교해서 
      // 값이 바뀌었을 경우 리렌더링 시켜준다.
      if(prevProps.id !== nextProps.id) return false;
      if(prevProps.isDone !== nextProps.isDone) return false;
      if(prevProps.content !== nextProps.content) return false;
      if(prevProps.date !== nextProps.date) return false;

      // 나머지 `props` 값들이 전부 바뀌지 않았다면 true를 반환해서 리렌더링되지 않도록 설정
      return true;
    }); 

  ```

  고차 컴포넌트(HOC) 관련 아티클

  https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/



  