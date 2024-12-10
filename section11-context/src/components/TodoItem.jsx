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
// export const MemoizedTodoItem = memo(TodoItem, (prevProps, nextProps)=>{
//   // * 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // - True를 반환 -> Props 바뀌지 않음 -> 리렌더링 X
//   // - False를 반환 -> Props 바뀜 -> 리렌더링 O

//   // 전달받는 `props`에서 객체 타입(Reference Type)인 함수를 제외한 `props`값들을 서로 비교해서 
//   // 값이 바뀌었을 경우 리렌더링 시켜준다.
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   // 나머지 `props` 값들이 전부 바뀌지 않았다면 true를 반환해서 리렌더링되지 않도록 설정
//   return true;
// }); 

export const MemoizedTodoItem =  memo(TodoItem);