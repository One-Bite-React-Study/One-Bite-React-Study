import { useState } from "react";
import { useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      //통합시킴 프로퍼티 키 e.target.name => [변수] => 키로서 설정됨
      //이벤트가 발생된 타겟의 name태그의 값이 여기 키값에 들어가게 되고 키로서 사용해서 값을 변경시킴 e.target -> input
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* 입력값이 e라는 매개변수로 이벤트에 들어가서 확인 가능  */}
      <div>
        <input
          ref={inputRef} // 객체 접근하기 위해서 ref를 사용
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"name"}
        />
        {input.name}
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
        {input.birth}
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">korea</option>
          <option value="america">usa</option>
          <option value="kingdom">uk</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default Register;
