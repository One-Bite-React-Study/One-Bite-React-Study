import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import { Viewer, Controller, Even} from './components/_index';


// * 부모에서 자식 컴포넌트에 `props`로 `state`를 공유해야 하므로 `<App/>` 컴포넌트에 `state`를 생성
// -> 형제 관계인 컴포넌트 끼리는 서로 `props`로 값을 공유할 수 없다.
function App() {

  const [count, setCount] = useState(0);
  const [input , setInput] = useState('');

  const isMount = useRef(false);

  // * 1. Mount : 탄생
  // -> Mount될 때 한번 실행
    useEffect(()=>{
      console.log('mount');      
    }, [])
    
  // * 2. Update : 변화, 리렌더링
  // -> Mount될 때 한번 실행 된 다음에 해당 컴포넌트가 리렌더링 될 때(Update) 마다 계속 실행
    useEffect(()=>{

      // * 최초 Mount될 때를 제외한 이후 업데이트되는 순간에 만 콜백을 실행하도록
      if(!useRef.current){
        isMount.current = true; 
        return;
      }

      console.log('update');      
    })

  // 3. UnMount: 죽음
  useEffect(()=>{

  },[])


  // 이벤트 핸들러를 부모 컴포넌트 내부에서 생성해서 `props`로 전달 
  const onClickButton = (value) => () => setCount(count + value);

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={({target: { value }})=> setInput(value) }/>
      </section>

      <section>
        <Viewer count={count} />
        {
          !(count % 2) ? <Even/> : null
        }
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
