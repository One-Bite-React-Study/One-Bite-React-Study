import { useState } from "react";

const Counter = () => {
  // 1: 초기값  2:상태변화 함수
  // 보통 구조분해해서 할당 받음
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
