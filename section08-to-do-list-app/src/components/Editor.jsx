import React, { useRef } from 'react'
import './Editor.css';

export const Editor = ({onCreate}) => {

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
