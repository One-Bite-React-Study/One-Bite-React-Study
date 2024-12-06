import './App.css';
import React, { useState } from 'react'
import { Viewer, Controller } from './components/_index';


// * 부모에서 자식 컴포넌트에 `props`로 `state`를 공유해야 하므로 `<App/>` 컴포넌트에 `state`를 생성
// -> 형제 관계인 컴포넌트 끼리는 서로 `props`로 값을 공유할 수 없다.
function App() {

  const [count, setCount] = useState(0);

  // 이벤트 핸들러를 부모 컴포넌트 내부에서 생성해서 `props`로 전달 
  const onClickButton = (value) => () => setCount(count + value);

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
