import React, { useRef, useContext } from 'react'
import './Editor.css';
import { TodoContext } from '../App';

export const Editor = () => {

  // * `useContext()`에 인수로 데이터를 불러오고자 하는 Context를 직접 넣어준다.
  // -> 인수로 전달한 Context로 부터 공급된 데이터를 반환해준다.
  const { onCreate } = useContext(TodoContext);
  
  
  const inputRef = useRef(null);  

  const onSubmit = () => {
    if(inputRef.current.value === '') {
      alert('문자를 입력해주세요');
      inputRef.current.focus();
      return;
    }

    onCreate(inputRef.current.value);

    inputRef.current.value = '';
  }

  const onKeyDown = ({keyCode})=> (keyCode === 13) && onSubmit();

  return (
    <div className='Editor'>
      <input onKeyDown={onKeyDown} ref={inputRef} type='text' placeholder='새로운 Todo..'/>
      <button onClick={onSubmit} type="button">추가</button>
    </div>
  )
}
