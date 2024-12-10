import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";
function App() {
  // 부모단에서 상태를 가지고 있어야함
  const [count, setCount] = useState(0);

  // 이베트 핸들러를 넘겨줘서 컨트롤러에서 함수 실행시키면 App단에서 상태변화가 일어나고 리랜더링
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter </h1>
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
