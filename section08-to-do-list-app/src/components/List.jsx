import React from 'react'
import { TodoItem } from './_index';
import './List.css'

export const List = () => {
  return (
    <div className='List'> 
      <h4>Todo List 🌱</h4>
      <input type="text" placeholder='검색어를 입력하세요' />
      
      <div className='todos_wrapper' >
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}
