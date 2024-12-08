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
