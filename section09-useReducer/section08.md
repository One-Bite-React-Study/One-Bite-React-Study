## 📚 section08-useReducer

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
        default: state;
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

  