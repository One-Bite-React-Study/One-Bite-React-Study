import './App.css';
import React, { useState } from 'react';

// * Root Component
function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <>
      <div>
        {light}
        <button onClick={()=>{setLight(light === 'ON' ? 'OFF' : 'ON');}}>
          { light === 'ON' ? '끄기' : '켜기'}</button>
        </div>

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
    </>
  );
}

export default App;
