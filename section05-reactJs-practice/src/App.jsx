import './App.css';
import React, { useState } from 'react';
import { Bulb } from './components/Bulb';
import { Count } from './components/Count';

// 🔄 리액트 컴포넌트 리렌더링이 발생하는 상황
//  1. 자신이 관리하는 `state`의 값이 변경될 때
//  2. 자신이 제공 받는 `props`의 값이 변경될 때
//  3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링 된다.

// * Root Component
function App() {
  return (
    <>
      <Bulb />
      <Count />
    </>
  );
}

export default App;
