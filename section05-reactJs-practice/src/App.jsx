import './App.css'
import Header  from './components/Header'; // 파일을 찾아가도록 내부적으로 자동 설정이 되어 있으므로 확장자 생략 가능
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';


// * Root Component
function App() {  

  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
  }

  return (
    <>      

      {/* 전달할 props들을 객체로 만들어서 컴포넌트에 spread operator로 흩뿌려서 전달 */}
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        {/* <Header/> 컴포넌트를 props로 전달 */}
        <Header/>
      </Button>      
    </>
  )
}

export default App;
