import React, { useState } from 'react'

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 는 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

// * Custom Hook
// -> React Hook은 함수 컴포넌트 내부, 커스텀 훅 내부에서만 호출할 수 있으므로 함수명 앞에 접두사 `use`를 붙여줘야 한다.
export function useInput(){
  
  const [input, setInput] = useState('');
    
  const onChange = ({target: {value}}) => setInput(value);

  return { input, onChange };
}