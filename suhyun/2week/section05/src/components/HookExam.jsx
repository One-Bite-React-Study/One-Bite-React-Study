import { useState } from "react";
// Hook의 팁
// 1. 함수 컴포넌트 커스텀 훅 내부에서만 사용 가능 전역적으로 사용 불가 내부 에서만!
// 2, 조건부로 호출될 수는 없다 . 조건문이나 반복문 안에서 호출 불가
// 3. 커스텀 훅을 직접 만들 수 있다

function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
